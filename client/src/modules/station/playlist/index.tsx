import React, { useCallback } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

import { TabPlaylist } from './tab-playlist';
import { TabFavourites } from './tab-favourites';
import { TabHistory } from './tab-history';

export const Playlist: React.FC<{}> = () => {
  const classes = useStyles();
  const { t } = useTranslation(['station']);
  const [tab, setTab] = React.useState<number>(0);

  const tabs = [
    { tabName: t('station:tabPlaylist') },
    { tabName: t('station:tabFavourites') },
    { tabName: t('station:tabHistory') },
  ];

  const handleChange = useCallback((_, value: number) => {
    setTab(value);
  }, []);

  return (
    <div className={classes.container}>
      <Tabs value={tab} onChange={handleChange} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
        {tabs.map(tab => (
          <Tab disableRipple key={tab.tabName} label={tab.tabName} className={classes.tabItem} />
        ))}
      </Tabs>
      {tab === 0 && <TabPlaylist>{t('station:tabPlaylist')}</TabPlaylist>}
      {tab === 1 && <TabFavourites>{t('station:tabFavourites')}</TabFavourites>}
      {tab === 2 && <TabHistory>{t('station:tabHistory')}</TabHistory>}
    </div>
  );
};
