import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }: Theme) => ({
  closeNotificationButton: {
    color: palette.common.white,
  },
}));
