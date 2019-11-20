import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  thumbnailContainer: {
    flexShrink: 0,
    marginRight: spacing(1),
    width: 65,
    height: '100%',
  },
  thumbnail: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
