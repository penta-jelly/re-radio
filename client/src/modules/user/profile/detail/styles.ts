import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, typography, palette }: Theme) => ({
  root: {
    background: '#ececec',
    width: '100%',
    height: '100%',
    padding: spacing(1),
  },
  container: {},
  loadingContainer: {
    height: `calc(100% + ${spacing(2)}px)`,
  },
  infoSectionContainer: {
    paddingTop: spacing(1.5),
    paddingBottom: spacing(1.5),
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTop: '1px solid #c6c6c6',
  },
  infoSectionIcon: {
    fontSize: typography.body1.fontSize,
    marginRight: spacing(2),
  },
  infoSectionText: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  infoSectionPlaceholderText: {
    color: '#a0a0a0',
  },
  editButtonContainer: {
    margin: spacing(1),
  },
  editButtonIcon: {
    marginRight: spacing(1),
  },
}));
