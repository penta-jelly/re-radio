import { Card, Grid } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useYoutubeVideosLazyQuery } from 'operations';
import { useDebounce } from 'hooks/use-debounce';
import { Autocomplete } from './autocomplete';
import { useStyles } from './styles';

export const AddSong: React.FC<{}> = () => {
  const classes = useStyles();
  const [query, setQuery] = useState<string>('');
  const [fetch, { data, loading }] = useYoutubeVideosLazyQuery({
    variables: { where: { q: query } },
  });

  // Must debounce to prevent firing fetch request every input changed event
  const debounceQuery = useDebounce(query, 300);
  React.useEffect(() => {
    if (debounceQuery) {
      fetch();
    }
  }, [debounceQuery, fetch]);

  const onChangeInputValue = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event?.target) {
      setQuery(event.target.value);
    }
  }, []);

  return (
    <Card className={classes.card}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.wrapper}>
          <Autocomplete
            items={data?.youtubeVideos || []}
            placeholder={`Type song's name e.g "When you believe"`}
            loading={loading}
            onChangeInputValue={onChangeInputValue}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
