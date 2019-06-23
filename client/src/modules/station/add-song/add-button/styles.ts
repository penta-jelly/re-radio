import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  submitButtonContainer: {
    textAlign: 'end',
    position: 'absolute',
    bottom: spacing(-2),
    right: 0,
  },
  closeNotificationButton: {
    color: palette.common.white,
  },
}));
