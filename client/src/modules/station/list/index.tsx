import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { MdFiberManualRecord as FiberManualRecordIcon, MdShowChart as ShowChartIcon } from 'react-icons/md';
import { ReCard } from '../../../components/re-card';
import { ReCardLink } from '../../..//components/re-card/card-link';
import { StationsQuery } from '../../../graphql';

const placeHolderImage =
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80';

interface Props {
  data?: StationsQuery;
  empty?: React.ReactNode;
  itemClassName?: string;
}

export const StationsList: React.FC<Props> = ({ data, empty, itemClassName }) => {
  return (
    <>
      {data &&
        (data.stations.length === 0 ? (
          <Grid item xs={12}>
            <Typography>{empty || 'No stations'}</Typography>
          </Grid>
        ) : (
          data.stations.map(station => {
            if (!station) {
              return null;
            }
            let content: string | undefined;
            if (station.tags) {
              content = station.tags.map(tag => `#${tag.name}`).join(' ');
            }

            return (
              <ReCard
                key={station.id}
                title={station.name}
                media={{ image: placeHolderImage, alt: station.name, linkTo: `/station/${station.slug}` }}
                content={content}
                id={`station-${station.slug}`}
                className={itemClassName}
                links={
                  <>
                    <ReCardLink
                      Icon={FiberManualRecordIcon}
                      iconColor="primary"
                      text="0 online"
                      data-role="online-users-label"
                    />
                    <ReCardLink Icon={ShowChartIcon} iconColor="inherit" text="6 pinned" data-role="pinned-label" />
                  </>
                }
              />
            );
          })
        ))}
    </>
  );
};
