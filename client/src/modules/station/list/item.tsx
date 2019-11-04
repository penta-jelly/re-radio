import React from 'react';
import { MdFiberManualRecord as FiberManualRecordIcon, MdShowChart as ShowChartIcon } from 'react-icons/md';
import { ReCard } from 'components/re-card';
import { ReCardLink } from 'components/re-card/card-link';
import { StationsQuery } from 'operations';

const placeHolderImage = '/asset/stations/default.png';

interface Props {
  data: NonNullable<StationsQuery['stations'][0]>;
  placeHolderThumbnail?: string;
  className?: string;
}

export const StationItem: React.FC<Props> = ({ data, className, placeHolderThumbnail = placeHolderImage }) => {
  const content = React.useMemo<string | null>(() => {
    if (data.tags) {
      return data.tags.map(tag => `#${tag.name}`).join(' ');
    }
    return null;
  }, [data]);

  const thumbnail = React.useMemo(() => {
    if (!data.playingSong) return placeHolderThumbnail;
    return data.playingSong.thumbnail;
  }, [data.playingSong, placeHolderThumbnail]);

  return (
    <ReCard
      key={data.id}
      title={data.name}
      media={{ image: thumbnail, alt: data.name, linkTo: `/station/${data.slug}` }}
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
