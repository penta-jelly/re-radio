import { withStyles, Tabs, Tab } from '@material-ui/core';

export const RadioTabs = withStyles({
  root: {},
  indicator: {},
})(Tabs);

export const RadioTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 64,
    fontWeight: theme.typography.fontWeightRegular,
  },
  selected: {},
}))(Tab);
