import { Card, Grid } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useYoutubeVideosQuery } from 'operations';
import { useDebounce } from 'hooks/use-debounce';
import { Autocomplete } from './autocomplete';
import { useStyles } from './styles';

export const AddSong: React.FC<{}> = () => {
  const classes = useStyles();
  const [query, setQuery] = useState<string>('');
  // Must debounce to prevent firing fetch request every input changed event
  const debouncedQuery = useDebounce(query, 300);
  const { data, loading } = useYoutubeVideosQuery({
    variables: {
      where: { q: debouncedQuery },
    },
    fetchPolicy: 'network-only',
  });

  const onChangeInputValue = useCallback<React.ChangeEventHandler<HTMLInputElement>>(event => {
    if (event && event.target) {
      setQuery(event.target.value);
    }
  }, []);

  return (
    <Card className={classes.card}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.wrapper}>
          <Autocomplete
            items={data && data.youtubeVideos ? data.youtubeVideos : []}
            placeholder={`Type song's name e.g "When you believe"`}
            loading={loading}
            onChangeInputValue={onChangeInputValue}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
