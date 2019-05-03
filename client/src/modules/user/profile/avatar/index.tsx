import { Image } from 'components/image';
import { CurrentUserDocument, UserProfileDocument, useUpdateUserAvatarMutation } from 'operations';
import React from 'react';
import { FaUpload } from 'react-icons/fa';
import { useStyles } from './styles';

const DEFAULT_AVATAR = 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-256.png';

interface Props {
  id: string;
  editable: boolean;
  username: string;
  url?: string | null;
  alt: string;
}

export const ProfileAvatar: React.FC<Props> = ({ id, editable, url, alt, username }) => {
  const classes = useStyles({ editable });
  const mutate = useUpdateUserAvatarMutation({
    refetchQueries: () => [
      { query: CurrentUserDocument },
      { query: UserProfileDocument, variables: { where: { username } } },
    ],
  });
  const callback = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    async ({ target: { validity, files } }) => {
      if (validity.valid && files) {
        await mutate({ variables: { file: files[0], where: { username } } });
      }
    },
    [mutate, username],
  );
  return (
    <label className={[classes.root, classes.label].join(' ')} htmlFor={editable ? id : ''}>
      <Image src={url} alt={alt} className={classes.avatar} fallbackSrc={DEFAULT_AVATAR} />
      {editable && (
        <div className={classes.overlay}>
          <div className={classes.overlayWrapper}>
            <FaUpload className={classes.overlayIcon} />
          </div>
        </div>
      )}
      <input
        type="file"
        required
        onChange={callback}
        data-role="avatar-image-input"
        id={id}
        className={classes.input}
      />
    </label>
  );
};
