import React from 'react';
import { Layout } from '../../containers/layout';
import { useUpdateUserAvatarMutation } from '../../graphql';
import { Typography, Card, CardHeader, Grid, CardContent } from '@material-ui/core';

export const UserProfile: React.FC = () => {
  const [hashedFileName, setHashedFilename] = React.useState<string>();
  const mutation = useUpdateUserAvatarMutation();
  const callback = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    async ({ target: { validity, files } }) => {
      if (validity.valid && files) {
        const result = await mutation({ variables: { file: files[0], where: { username: 'admin' } } });
        if (result.data) {
          setHashedFilename(result.data.updateUserAvatar);
        }
      }
    },
    [mutation],
  );
  return (
    <Layout>
      <Grid container>
        <Card>
          <CardHeader title="This is an example of how to upload a file to server via Apollo GraphQL" />
          <CardContent>
            <input type="file" required onChange={callback} />
            <Typography>You uploaded file should be render under this section</Typography>
            {hashedFileName && <img src={`http://localhost:8000/images/${hashedFileName}`} alt="" />}
            {hashedFileName && (
              <Typography>This file is storages under ./server/storages/images/{hashedFileName}</Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Layout>
  );
};

export default UserProfile;
