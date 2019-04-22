import { CircularProgress, Grid, Icon, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import {
  FaBuilding,
  FaCity,
  FaEdit,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaGoogle,
  FaInfoCircle,
  FaUser,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib/cjs';
import { PrimaryButton } from '../../../../components/button/primary-button';
import { useUserProfileQuery } from '../../../../graphql';
import { ProfileAvatar } from '../avatar';
import { useStyles } from './styles';

interface Props {
  username: string;
  editable: boolean;
}

export const DetailUserProfile: React.FC<Props> = ({ username, editable }) => {
  const classes = useStyles();

  const { data, loading } = useUserProfileQuery({ variables: { where: { username } } });

  return (
    <div className={classes.root}>
      {loading ? (
        <Grid container justify="center" alignItems="center" className={classes.loadingContainer}>
          <CircularProgress />
        </Grid>
      ) : (
        data &&
        data.user && (
          <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12}>
              <ProfileAvatar
                id="profile-image"
                alt={data.user.username}
                url={data.user.avatarUrl}
                username={data.user.username}
                editable={editable}
              />
            </Grid>
            <Grid item xs={12}>
              <InfoSection placeholder="Email" value={data.user.email} Icon={FaEnvelope} />
              <InfoSection placeholder="Username" value={data.user.username} Icon={FaUser} />
              <InfoSection placeholder="Reputation" value={data.user.reputation} Icon={FaGlobe} />
              <InfoSection placeholder="Google" value={data.user.googleId} Icon={FaGoogle} />
              <InfoSection placeholder="Facebook" value={data.user.facebookId} Icon={FaFacebook} />
              <InfoSection placeholder="City" value={data.user.city} Icon={FaBuilding} />
              <InfoSection placeholder="Country" value={data.user.country} Icon={FaCity} />
              <InfoSection placeholder="Bio" value={data.user.bio} Icon={FaInfoCircle} />
            </Grid>
            <Grid item xs={12} style={{ marginTop: 'auto' }}>
              {editable && (
                <div className={classes.editButtonContainer}>
                  <PrimaryButton fullWidth>
                    <FaEdit className={classes.editButtonIcon} />
                    Edit
                  </PrimaryButton>
                </div>
              )}
            </Grid>
          </Grid>
        )
      )}
    </div>
  );
};

const InfoSection: React.FC<{ placeholder?: string; value?: string | number | null; Icon: IconType }> = ({
  placeholder,
  value,
  Icon: SvgIcon,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.infoSectionContainer}>
      <Icon className={classes.infoSectionIcon}>
        <SvgIcon />
      </Icon>
      {value ? (
        <Tooltip title={`${placeholder}: ${value}`} placement="bottom-start">
          <Typography variant="body2" className={classes.infoSectionText}>
            {value}
          </Typography>
        </Tooltip>
      ) : (
        <Typography variant="body2" className={classes.infoSectionPlaceholderText}>
          {placeholder}
        </Typography>
      )}
    </div>
  );
};
