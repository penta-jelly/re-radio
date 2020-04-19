import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(1, 2),
  },
  onlineButton: {
    color: '#74ca98',
  },
  content: {
    display: 'flex',
  },
  rightContent: {
    marginLeft: 'auto',
  },
  buttonGroup: {
    marginLeft: spacing(2),
  },
  iconButton: {
    fontSize: 24,
  },
  userAvatar: {
    marginLeft: spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: 24,
    height: 24,
    borderRadius: '50%',
  },
  onlineIndicator: {
    backgroundColor: palette.success.main,
    border: `1px solid #bfbfbf`,
    bottom: 3,
    right: 3,
  },
}));
