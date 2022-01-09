import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ typography, spacing }: Theme) => ({
  container: {
    marginTop: spacing(2),
    marginBottom: spacing(2),
  },
  previewThumbnailContainer: {},
  previewImg: {
    width: '100%',
    height: '100%',
  },
  previewContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: spacing(2),
  },
  songTitle: {},
  creator: {
    marginTop: 'auto',
  },
  defaultCover: {
    width: '100%',
    height: 'calc(100% - 80px)',
    marginTop: spacing(2),
    objectFit: 'contain',
  },
}));
