import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }: Theme) => ({
  submitButtonContainer: {
    textAlign: 'end',
    position: 'absolute',
    bottom: spacing(-2),
    right: 0,
  },
}));
