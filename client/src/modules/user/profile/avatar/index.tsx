import { useSnackbar } from 'notistack';
import React from 'react';
import { FaUpload } from 'react-icons/fa';
import { Image } from 'components/image';
import { useStyles } from './styles';

const DEFAULT_AVATAR = 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-256.png';

export interface Props {
  id: string;
  editable: boolean;
  username: string;
  url?: string | null;
  alt: string;
}

export const ProfileAvatar: React.FC<Props> = ({ id, editable, url, alt, username }) => {
  const classes = useStyles({ editable });
  // TODO: Bring back avatar upload
  // const [updateAvatar] = useUpdateUserAvatarMutation({
  //   refetchQueries: () => [
  //     { query: CurrentUserDocument },
  //     { query: UserProfileDocument, variables: { where: { username } } },
  //   ],
  // });
  // const callback = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
  //   async ({ target: { validity, files } }) => {
  //     if (validity.valid && files) {
  //       await updateAvatar({ variables: { file: files[0], where: { username } } });
  //     }
  //   },
  //   [updateAvatar, username],
  // );
  const { enqueueSnackbar } = useSnackbar();
  const onUpload = React.useCallback(() => {
    enqueueSnackbar('Not supported yet!', { variant: 'error', preventDuplicate: true });
  }, [enqueueSnackbar]);
  const inputId = React.useMemo(() => `${id}-input`, [id]);
  return (
    <label className={[classes.root, classes.label].join(' ')} htmlFor={editable ? inputId : ''}>
      <Image src={url} alt={alt} className={classes.avatar} fallbackSrc={DEFAULT_AVATAR} onClick={onUpload} id={id} />
      {editable && (
        <div className={classes.overlay} onClick={onUpload}>
          <div className={classes.overlayWrapper}>
            <FaUpload className={classes.overlayIcon} />
          </div>
        </div>
      )}
      {/*<input*/}
      {/*  type="file"*/}
      {/*  required*/}
      {/*  onChange={callback}*/}
      {/*  data-role="avatar-image-input"*/}
      {/*  id={inputId}*/}
      {/*  className={classes.input}*/}
      {/*/>*/}
    </label>
  );
};
