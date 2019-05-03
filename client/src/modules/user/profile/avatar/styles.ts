import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  root: (props: { editable: boolean }) => ({
    position: 'relative',
    display: 'block',
    margin: spacing(2),
    cursor: props.editable ? 'pointer' : 'default',
  }),
  label: {
    '&:hover $overlay': {
      display: 'flex',
    },
  },
  overlay: {
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlayWrapper: {
    margin: 'auto',
    borderRadius: '50%',
    width: 180,
    height: 180,
    background: `rgba(0,0,0,0.67)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayIcon: {
    fontSize: 36,
    color: palette.common.white,
  },
  avatar: {
    margin: 'auto',
    display: 'block',
    width: 180,
    height: 180,
    borderRadius: '50%',
    border: `2px solid ${palette.common.black}`,
  },
  input: {
    display: 'none',
  },
}));
