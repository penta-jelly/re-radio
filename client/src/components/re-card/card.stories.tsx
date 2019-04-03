import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import { ReCard } from './index';
import { ReCardLink } from './card-link';

storiesOf('ReCard', module).add('Simple', () => (
  <div style={{ width: 300 }}>
    <ReCard
      media={{
        image:
          'https://images.unsplash.com/photo-1553451035-a52b5e13e866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2221&q=80',
      }}
      title="Get high"
      content="#penta #aucostic"
      icon={<FavoriteBorderIcon />}
      links={[
        <ReCardLink
          icon={<FiberManualRecordIcon color="primary" />}
          text="0 online"
          key="1"
          onClick={action('left link clicked')}
        />,
        <ReCardLink
          icon={<ShowChartIcon color="inherit" />}
          text="6 pinned"
          key="2"
          onClick={action('right link clicked')}
        />,
      ]}
      onIconButtonClick={action('Icon button clicked!')}
    />
  </div>
));
