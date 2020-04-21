import { CircularProgress, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useStationQuery } from 'operations';
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
  const { data, error } = useStationQuery({ variables: { slug: params.slug } });

  React.useEffect(() => {
    if (data) {
      let newTitle = `${data.station.name}`;
      if (data.station.playingSong) {
        newTitle = `${data.station.playingSong.title} - ${data.station.name}`;
      }
      document.title = newTitle;
    }
  }, [data]);

  React.useEffect(
    () => () => {
      document.title = 'Re-radio';
    },
    [],
  );

  const {
    player: { muted, setMuted },
  } = useStationContextState();

  const content = React.useMemo<React.ReactNode>(() => {
    if (data) {
      return (
        <>
          <div className={classes.content}>
            <Typography variant="subtitle1">{data.station.name}</Typography>
          </div>
          <div className={`${classes.content} ${classes.buttonGroup}`}>
            <IconButton color="inherit" size="medium" className={classes.iconButton} onClick={() => setMuted(!muted)}>
              {muted ? <MdVolumeOff /> : <MdVolumeUp />}
            </IconButton>
          </div>
          <div className={`${classes.content} ${classes.rightContent}`}>
            {data.station.onlineUserIds.slice(0, 5).map((id) => (
              <OnlineUser key={id} userId={id} />
            ))}
            <UserInvitation />
          </div>
        </>
      );
    } else if (error) {
      return error.message;
    }
    return <CircularProgress color="inherit" />;
  }, [classes.buttonGroup, classes.content, classes.iconButton, classes.rightContent, data, error, muted, setMuted]);

  return <div className={classes.container}>{content}</div>;
};
