import { Card, Grid } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useStyles } from './styles';
import { Autocomplete } from 'modules/station/add-song/autocomplete';
import { useSongExplorersQuery } from 'operations';

export const AddSong: React.FC<{}> = () => {
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const { data, loading } = useSongExplorersQuery({
    variables: {
      where: { q: value },
    },
  });

  const onChangeInputValue = useCallback<React.ChangeEventHandler<HTMLInputElement>>(event => {
    if (event && event.target) {
      setValue(event.target.value);
    }
  }, []);

  return (
    <Card className={classes.card}>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} className={classes.wrapper}>
          <Autocomplete
            items={data && data.songExplorers ? data.songExplorers : []}
            placeholder={`Type song's name e.g "When you believe"`}
            loading={loading}
            onChangeInputValue={onChangeInputValue}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
