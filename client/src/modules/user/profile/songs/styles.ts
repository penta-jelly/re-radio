import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    padding: spacing(2),
    width: '100%',
  },
  sectionTitle: {
    fontWeight: 700,
  },
}));
