import React from 'react';
import { useParams } from 'react-router';
import { Layout } from 'containers/layout';
import { StationContext, StationLayout, useStationContextState } from 'modules';
import { useCurrentUserQuery, useJoinStationMutation, useLeaveStationMutation } from 'operations';
import { useInterval } from 'hooks/use-interval';

interface RouteParams {
  slug: string;
}

const Station: React.FC = () => {
  const contextState = useStationContextState();

  const params = useParams<RouteParams>();
  const currentUserQuery = useCurrentUserQuery();
  const [joinStation] = useJoinStationMutation();
  const [leaveStation] = useLeaveStationMutation();

  React.useEffect(() => {
    if (currentUserQuery.data) {
      joinStation({ variables: { where: { slug: params.slug } } });
      return () => {
        leaveStation({ variables: { where: { slug: params.slug } } });
      };
    }
  }, [currentUserQuery.data, joinStation, leaveStation, params]);

  useInterval(() => {
    if (currentUserQuery.data) joinStation({ variables: { where: { slug: params.slug } } });
  }, parseInt(process.env.REACT_APP_JOIN_STATION_INTERVAL));

  return (
    <StationContext.Provider value={contextState}>
      <Layout drawer={contextState.drawer}>
        <StationLayout />
      </Layout>
    </StationContext.Provider>
  );
};

export default Station;
