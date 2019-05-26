import { CircularProgress, Grid, MenuItem, Paper, Typography } from '@material-ui/core';
import { InputBaseProps } from '@material-ui/core/InputBase';
import { ReSearch } from 'components/input/re-search';
import Downshift, { Actions, DownshiftState, PropGetters, StateChangeOptions } from 'downshift';
import { AddButton } from 'modules/station/add-song/add-button';
import { useStyles } from 'modules/station/add-song/autocomplete/styles';
import { Preview } from 'modules/station/add-song/preview';
import { MiniSongExplorer, SongExplorersQuery } from 'operations';
import React, { useCallback, useState } from 'react';

type DropdownItem = SongExplorersQuery['songExplorers'][0];

export interface AutocompleteProps {
  items: SongExplorersQuery['songExplorers'];
  label?: string;
  placeholder?: string;
  loading?: boolean;
  onChangeInputValue?: InputBaseProps['onChange'];
}

type AutocompleteWithDownshiftType = PropGetters<DropdownItem> & Actions<DropdownItem> & DownshiftState<DropdownItem>;

export const Autocomplete: React.FC<AutocompleteProps> = props => {
  const classes = useStyles();

  const [previewSong, setPreviewSong] = useState<MiniSongExplorer>();

  const renderSuggestion = useCallback(
    ({
      index,
      options,
      suggestion,
    }: {
      suggestion: DropdownItem;
      index: number;
      options: AutocompleteWithDownshiftType;
    }): React.ReactNode => {
      const { getItemProps, highlightedIndex } = options;

      const isHighlighted = highlightedIndex === index;
      return (
        <MenuItem
          {...getItemProps({ item: suggestion })}
          key={index}
          id="search-song-item"
          selected={isHighlighted}
          component={'div'}
        >
          <Grid container>
            <Grid item xs={1} className={classes.thumbnailContainer}>
              <img
                src={suggestion.snippet.thumbnails.default.url}
                alt="Search Song Thumbnail"
                className={classes.thumbnail}
              />
            </Grid>
            <Grid item xs={11} className={classes.menuItemRight}>
              <Typography variant="body1">{suggestion.snippet.title}</Typography>
            </Grid>
          </Grid>
        </MenuItem>
      );
    },
    [classes.menuItemRight, classes.thumbnail, classes.thumbnailContainer],
  );

  const autocompleteContents = useCallback(
    (options: AutocompleteWithDownshiftType) => {
      const { clearSelection, getInputProps, getMenuProps, inputValue, isOpen, openMenu, reset } = options;

      const _inputProps = getInputProps<InputBaseProps>({
        placeholder: props.placeholder || '',
        value: inputValue,
        onChange: event => {
          if (event.target.value === '') {
            clearSelection();
          }
          if (props.onChangeInputValue) {
            props.onChangeInputValue(event);
          }
        },
        onFocus: () => {
          openMenu();
        },
      });

      return (
        <div className={classes.downShiftContentContainer}>
          <ReSearch
            {..._inputProps}
            id="search-song-input"
            className={classes.researchContainer}
            placeholder={`Type song's name e.g "When you believe"`}
            fullWidth
            icon={props.loading && <CircularProgress size={24} />}
            onIconClick={() => {
              reset();
              clearSelection();
            }}
          />
          <div {...getMenuProps()}>
            {isOpen && props.items.length > 0 ? (
              <Paper className={classes.paper} id="search-song-menu">
                {props.items.map((item, index) => renderSuggestion({ index, options, suggestion: item }))}
              </Paper>
            ) : null}
          </div>
          <Preview previewSong={previewSong} />
          <AddButton
            previewSong={previewSong}
            postSubmit={() => {
              reset();
              clearSelection();
            }}
          />
        </div>
      );
    },
    [props, classes.downShiftContentContainer, classes.researchContainer, classes.paper, renderSuggestion, previewSong],
  );

  const handleStateReducer = (
    state: DownshiftState<DropdownItem>,
    changes: StateChangeOptions<DropdownItem>,
  ): StateChangeOptions<DropdownItem> => {
    switch (changes.type) {
      // TODO: Keep input value even doesn't select item
      case Downshift.stateChangeTypes.blurInput: {
        return {
          ...changes,
          inputValue: state.inputValue,
        };
      }

      default:
        return changes;
    }
  };

  const itemToString = (item: DropdownItem) => (item ? item.snippet.title : '');

  return (
    <Downshift
      stateReducer={handleStateReducer}
      itemToString={itemToString}
      onSelect={selectedItem => {
        setPreviewSong(selectedItem);
      }}
    >
      {autocompleteContents}
    </Downshift>
  );
};
