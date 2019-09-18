import { IconButton } from '@material-ui/core';
import { useStyles } from 'hooks/use-unauthorized-notification/styles';
import { OptionsObject, useSnackbar } from 'notistack';
import React from 'react';
import { MdClose as CloseIcon } from 'react-icons/md';

type ReturnType = () => OptionsObject['key'] | null;
export const useUnauthorizedNotification = (): ReturnType => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return () =>
    enqueueSnackbar('You have to login to add a song.', {
      variant: 'warning',
      persist: true,
      action: key => (
        <IconButton
          className={classes.closeNotificationButton}
          size="small"
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          <CloseIcon />
        </IconButton>
      ),
    });
};
