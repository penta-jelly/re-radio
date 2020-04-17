import { CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useStationQuery } from 'operations';
import { useStyles } from './styles';
import { OnlineUser } from './online-user';
import { UserInvitation } from './user-invitation';

interface RouteParams {
  slug: string;
}

export const Header: React.FC = props => {
  const classes = useStyles();
  const params = useParams<RouteParams>();
  const { data, error } = useStationQuery({ variables: { slug: params.slug } });

  React.useEffect(() => {
    if (data) {
      let newTitle = `${data.station.name}`;
      if (data.station.playingSong) {
        newTitle = `${data.station.name} - ${data.station.playingSong.title}`;
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

  const content = React.useMemo<React.ReactNode>(() => {
    if (data) {
      return (
        <>
          <div>
            <Typography variant="subtitle1">{data.station.name}</Typography>
          </div>
          <div className={classes.users}>
            {data.station.onlineUserIds.slice(0, 5).map(id => (
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
  }, [classes.users, data, error]);

  return <div className={classes.container}>{content}</div>;
};
