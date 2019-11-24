import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  thumbnailContainer: {
    flexShrink: 0,
    marginRight: spacing(1),
    width: 65,
    height: '100%',
    position: 'relative',
  },
  thumbnail: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  duration: {
    background: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    color: palette.primary.contrastText,
    fontSize: 12,
    bottom: 0,
    right: 0,
  },
  primaryContent: {
    display: 'flex',
    marginBottom: spacing(1),
  },
  secondaryContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: spacing(0.5),
  },
  creator: {
    display: 'flex',
    alignItems: 'center',
  },
  creatorAvatar: {
    width: 18,
    height: 18,
    borderRadius: '50%',
    marginLeft: spacing(0.5),
  },
  vote: {},
  voteButton: {
    fontSize: 16,
    marginLeft: 2,
    marginRight: 2,
  },
  voteIndicator: {
    height: 2,
  },
}));
