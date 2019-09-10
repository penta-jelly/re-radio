import { Card, CardContent, Fade, FormHelperText, TextField, Typography } from '@material-ui/core';
import { RefetchQueryDescription } from 'apollo-client/core/watchQueryOptions';
import { PrimaryButton } from 'components/button/primary-button';
import { Formik, FormikActions } from 'formik';
import { useRouter } from 'hooks/use-router';
import { useToggle } from 'hooks/use-toggle';
import {
  StationTag,
  StationTagCreateManyWithoutStationsInput,
  StationTagsDocument,
  StationTagsQuery,
  StationTagsQueryVariables,
  useCreateStationMutation,
  useCurrentUserQuery,
  UserRoleCreateManyWithoutStationInput,
  UserRoleEnum,
} from 'operations';
import React from 'react';
import { useApolloClient } from 'react-apollo';
import { MdRadio as StationIcon } from 'react-icons/md';
import * as yup from 'yup';
import { useStyles } from './styles';

interface Props {
  postSubmit?: {
    refetchQueries?: RefetchQueryDescription;
    redirectTo?: string;
  };
}

interface Data {
  name: string;
  slug: string;
  description?: string;
  tags?: string;
}

export const CreateStationForm: React.FC<Props> = props => {
  const classes = useStyles();

  const apolloClient = useApolloClient();
  const { history } = useRouter();
  const currentUserQuery = useCurrentUserQuery();

  const [isMoreInfo, toggleIsMoreInfo] = useToggle(false);

  const [createStationMutation] = useCreateStationMutation();

  const onCreateStation = React.useCallback(
    async (values: Data, formik: FormikActions<Data>) => {
      try {
        if (currentUserQuery.error || !currentUserQuery.data || !currentUserQuery.data.user) {
          console.error(currentUserQuery.error);
          formik.setStatus('Unauthorized. You need to login to perform this action.');
          return;
        }
        const { user } = currentUserQuery.data;
        const { name, slug, description } = values;

        // Start resolving tags
        let rawTags = values.tags ? values.tags.split(' ') : [];
        rawTags = rawTags.map(tag => tag.replace('#', ''));

        const nonExistedTags: string[] = [];
        const existedTags: Pick<StationTag, 'id' | 'name'>[] = [];
        const failedTags: string[] = [];

        await Promise.all(
          rawTags.map(async tag => {
            try {
              const { data } = await apolloClient.query<StationTagsQuery, StationTagsQueryVariables>({
                query: StationTagsDocument,
                variables: { name: tag },
                fetchPolicy: 'no-cache',
              });
              if (data.stationTags.length > 0) {
                existedTags.push(data.stationTags[0]!);
              } else {
                nonExistedTags.push(tag);
              }
            } catch (e) {
              failedTags.push(tag);
            }
          }),
        );
        if (failedTags.length > 0) {
          formik.setStatus(`Can not create these tag #${failedTags.join(', #')}`);
          return;
        }
        const tags: StationTagCreateManyWithoutStationsInput = {
          create: nonExistedTags.map(name => ({ name })),
          connect: existedTags.map(({ id }) => ({ id })),
        };
        // Finish resolving tags

        // Start resolving user roles
        const userRoles: UserRoleCreateManyWithoutStationInput = {
          create: [{ role: UserRoleEnum.StationOwner, user: { connect: { id: user.id } } }],
        };
        // Finish resolving user roles

        await createStationMutation({
          variables: { data: { name, slug, description, tags, userRoles } },
          refetchQueries: props.postSubmit && props.postSubmit.refetchQueries,
        });
        if (props.postSubmit && props.postSubmit.redirectTo) {
          history.push(props.postSubmit.redirectTo);
        }
      } catch (e) {
        formik.setStatus(e.message);
      } finally {
        formik.setSubmitting(false);
      }
    },
    [props.postSubmit, history, apolloClient, createStationMutation, currentUserQuery],
  );

  return (
    <Card className={classes.root} square>
      <CardContent className={classes.cardContent}>
        <Formik<Data>
          initialValues={{ name: '', slug: '', description: '', tags: '' }}
          validationSchema={yup.object().shape({
            name: yup
              .string()
              .required()
              .max(64),
            slug: yup
              .string()
              .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Must be in slug format, e.g.: awesome-station')
              .max(64)
              .required(),
            description: yup.string().max(1024),
            tags: yup
              .string()
              .test('is-tags-input', 'Must be a valid tags format, e.g.: #re-radio #radio', (value?: string) => {
                const tags = value ? value.split(' ') : [];
                return tags.every(tag => /\B(#[a-zA-Z0-9]+\b)(?!;)/.test(tag));
              }),
          })}
          onSubmit={onCreateStation}
        >
          {({ values, isSubmitting, handleSubmit, handleChange, handleBlur, touched, errors, status }) => (
            <form onSubmit={handleSubmit} noValidate method="POST" id="create-station-form">
              <Typography variant="h6">Create your own station</Typography>
              {status && <FormHelperText error>{status}</FormHelperText>}
              <TextField
                variant="outlined"
                value={values.name}
                label="Station name"
                placeholder="Awesome station"
                margin="normal"
                fullWidth
                type="text"
                id="station-name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name && !!errors.name && errors.name}
                error={touched.name && !!errors.name}
                autoFocus
              />
              <TextField
                variant="outlined"
                value={values.slug}
                label="Station slug"
                placeholder="awesome-station"
                margin="normal"
                fullWidth
                type="text"
                id="station-slug"
                name="slug"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.slug && !!errors.slug && errors.slug}
                error={touched.slug && !!errors.slug}
              />
              <Typography
                variant="caption"
                color="primary"
                onClick={toggleIsMoreInfo}
                className={classes.toggleText}
                component="p"
                align="center"
                data-role="showMore"
              >
                Show {isMoreInfo ? 'less' : 'more'}
              </Typography>
              {isMoreInfo && (
                <Fade in={isMoreInfo}>
                  <div>
                    <TextField
                      variant="outlined"
                      value={values.description}
                      label="Station description"
                      margin="normal"
                      fullWidth
                      type="text"
                      id="station-description"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.description && !!errors.description && errors.description}
                      error={touched.description && !!errors.description}
                    />
                    <TextField
                      variant="outlined"
                      value={values.tags}
                      label="Station tags"
                      margin="normal"
                      fullWidth
                      type="text"
                      id="station-tags"
                      name="tags"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.tags && !!errors.tags && errors.tags}
                      error={touched.tags && !!errors.tags}
                    />
                  </div>
                </Fade>
              )}
              <PrimaryButton
                type="submit"
                id="create-station-button"
                size="medium"
                fullWidth
                className={classes.button}
                disabled={isSubmitting}
              >
                <StationIcon className={classes.buttonIcon} />
                Create Station
              </PrimaryButton>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
