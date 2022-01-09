import React from 'react';
import { Avatar } from '@material-ui/core';
import { MdAdd } from 'react-icons/md';
import { useSnackbar } from 'notistack';
import { useStyles } from './styles';

interface Props {}
export const UserInvitation: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const onClick = React.useCallback(() => {
    enqueueSnackbar('This feature is not ready yet! You can copy the page URL then share to your friend.', {
      variant: 'warning',
    });
  }, [enqueueSnackbar]);
  return (
    <Avatar className={classes.userAvatar} title="Invite your friend." onClick={onClick}>
      <MdAdd fontSize={12} />
    </Avatar>
  );
};
