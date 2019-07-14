import { IconButton } from '@material-ui/core';
import { useStyles } from 'hooks/use-unauthorized-notification/styles';
import { OptionsObject, useSnackbar } from 'notistack';
import React from 'react';
import { MdClose as CloseIcon } from 'react-icons/md';

type ReturnType = () => OptionsObject['key'] | null;
export const useUnauthorizedNotification = (message: string = 'You need to login first.'): ReturnType => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return () =>
    enqueueSnackbar(message, {
      variant: 'warning',
      persist: true,
      preventDuplicate: true,
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
