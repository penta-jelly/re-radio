import { CircularProgress, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useCurrentUserQuery, useStationQuery, useStationSettingLazyQuery } from 're-radio-common/lib/operations';
import { useStationContextState } from '../context';
import { OnlineUser } from './online-user';
import { useStyles } from './styles';
import { UserInvitation } from './user-invitation';

interface RouteParams {
  slug: string;
}

export const Header: React.FC = (props) => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  const stationQuery = useStationQuery({ variables: { slug: params.slug } });
  const currentUserQuery = useCurrentUserQuery();
  const [queryStationSetting] = useStationSettingLazyQuery();

  React.useEffect(() => {
    if (stationQuery.data && (currentUserQuery.data || currentUserQuery.error)) {
      queryStationSetting({
        variables: { stationId: stationQuery.data.station.id, userId: currentUserQuery.data?.user.id },
      });
    }
  }, [stationQuery.data, currentUserQuery.data, currentUserQuery.error, queryStationSetting]);

  React.useEffect(() => {
    if (stationQuery.data) {
      let newTitle = `${stationQuery.data.station.name}`;
      if (stationQuery.data.station.playingSong) {
        newTitle = `${stationQuery.data.station.playingSong.title} - ${stationQuery.data.station.name}`;
      }
      document.title = newTitle;
    }
  }, [stationQuery.data]);

  React.useEffect(
    () => () => {
      document.title = 'Re-radio';
    },
    [],
  );

  const {
    player: { muted, setMuted },
  } = useStationContextState();

  let content: React.ReactNode;
  if (stationQuery.data) {
    content = (
      <>
        <div className={classes.content}>
          <Typography variant="subtitle1">{stationQuery.data.station.name}</Typography>
        </div>
        <div className={`${classes.content} ${classes.buttonGroup}`}>
          <IconButton color="inherit" size="medium" className={classes.iconButton} onClick={() => setMuted(!muted)}>
            {muted ? <MdVolumeOff /> : <MdVolumeUp />}
          </IconButton>
        </div>
        <div className={`${classes.content} ${classes.rightContent}`}>
          {stationQuery.data.station.onlineUserIds.slice(0, 5).map((id) => (
            <OnlineUser key={id} userId={id} />
          ))}
          <UserInvitation />
        </div>
      </>
    );
  } else if (stationQuery.error) {
    content = stationQuery.error.message;
  } else {
    content = <CircularProgress color="inherit" />;
  }

  return <div className={classes.container}>{content}</div>;
};
