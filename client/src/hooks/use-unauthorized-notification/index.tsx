import { IconButton } from '@material-ui/core';
import { OptionsObject, useSnackbar } from 'notistack';
import React from 'react';
import { MdClose as CloseIcon } from 'react-icons/md';
import { useStyles } from 'hooks/use-unauthorized-notification/styles';

type ReturnType = () => OptionsObject['key'] | null;
export const useUnauthorizedNotification = (message: string = 'You need to login first.'): ReturnType => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const key = 'UnauthorizedNotification';
  return () =>
    enqueueSnackbar(message, {
      key,
      variant: 'warning',
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
      preventDuplicate: true,
      action: (key) => (
        <IconButton className={classes.closeNotificationButton} size="small" onClick={() => closeSnackbar(key)}>
          <CloseIcon />
        </IconButton>
      ),
    });
};
