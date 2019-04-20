import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

import { PlaylistItem } from './playlist-item';
import { PageLoader } from '../../../../components/page-loader';

import { items } from './data';
import { useSongsQuery, SongOrderByInput } from '../../../../graphql';

export const TabPlaylist: React.FC<{}> = props => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);

  const { loading, error, data } = useSongsQuery({
    variables: {
      first: 25,
      skip: 0,
      orderBy: SongOrderByInput.CreatedAtDesc,
    },
  });
  console.log(data);

  return (
    <div className={classes.container}>
      {loading ? (
        <PageLoader />
      ) : error || !data ? (
        <div>{t('common:error')}</div>
      ) : (
        data.songs.map(song => {
          if (!song) {
            return null;
          }
          return <PlaylistItem key={song.id} item={song} />;
        })
      )}
    </div>
  );
};
