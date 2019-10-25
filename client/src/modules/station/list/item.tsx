import { ReCard } from 'components/re-card';
import { ReCardLink } from 'components/re-card/card-link';
import { SongStatusEnum, StationsQuery, useOnStationPlayingSongChangedSubscription } from 'operations';
import React from 'react';
import { MdFiberManualRecord as FiberManualRecordIcon, MdShowChart as ShowChartIcon } from 'react-icons/md';

const placeHolderImage =
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80';

interface Props {
  data: NonNullable<StationsQuery['stations'][0]>;
  className?: string;
}

export const StationItem: React.FC<Props> = ({ data, className }) => {
  const content = React.useMemo<string | null>(() => {
    if (data.tags) {
      return data.tags.map(tag => `#${tag.name}`).join(' ');
    }
    return null;
  }, [data]);

  const [thumbnail, setThumbnail] = React.useState<string | null>(() => {
    // TODO: revive thumbnail
    // const playingSong = data.songs && data.songs[0];
    // return playingSong && playingSong.thumbnail;
    return '';
  });

  useOnStationPlayingSongChangedSubscription({
    variables: { stationSlug: data.slug },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      if (!data) return;
      const { onPlayingSongChanged } = data;
      if (!onPlayingSongChanged) return;
      const { entity } = onPlayingSongChanged;
      if (!entity) return;
      if (entity.status === SongStatusEnum.Playing) {
        setThumbnail(entity.thumbnail);
      } else {
        setThumbnail(null);
      }
    },
  });

  return (
    <ReCard
      key={data.id}
      title={data.name}
      media={{ image: thumbnail || placeHolderImage, alt: data.name, linkTo: `/station/${data.slug}` }}
      content={content}
      id={`station-${data.slug}`}
      className={className}
      links={
        <>
          <ReCardLink Icon={FiberManualRecordIcon} iconColor="primary" text="0 online" data-role="online-users-label" />
          <ReCardLink Icon={ShowChartIcon} iconColor="inherit" text="6 pinned" data-role="pinned-label" />
        </>
      }
    />
  );
};
