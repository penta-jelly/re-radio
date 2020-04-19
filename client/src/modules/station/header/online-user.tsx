import React from 'react';
import { useHistory } from 'react-router';
import { Badge } from '@material-ui/core';
import { Image } from 'components/image';
import { useMiniUserQuery } from 'operations';
import { useStyles } from './styles';

interface Props {
  userId: number;
}
export const OnlineUser: React.FC<Props> = props => {
  const classes = useStyles();

  const history = useHistory();

  const { data, error, loading } = useMiniUserQuery({ variables: { where: { id: props.userId } } });

  const onClick = React.useCallback(() => {
    if (data) {
      history.push(`/profile/${data.user.username}`);
    }
  }, [data, history]);

  if (loading || !data || error) {
    return null;
  }

  return (
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      classes={{ dot: classes.onlineIndicator }}
    >
      <Image
        data-role="online-user-avatar"
        alt={data.user.username}
        title={data.user.username}
        src={data.user.avatarUrl || '/asset/avatar/female.png'}
        className={classes.userAvatar}
        onClick={onClick}
      />
    </Badge>
  );
};
