import { CircularProgress, Grid, MenuItem, Paper, Typography } from '@material-ui/core';
import { InputBaseProps } from '@material-ui/core/InputBase';
import Downshift, { Actions, DownshiftState, PropGetters, StateChangeOptions } from 'downshift';
import React, { useCallback, useState } from 'react';
import { YoutubeVideo, YoutubeVideosQuery } from 'operations';
import { ReSearch } from 'components/input/re-search';
import { AddButton } from '../add-button';
import { Preview } from '../preview';
import { useStyles } from './styles';

type DropdownItem = YoutubeVideosQuery['youtubeVideos'][0];

export interface AutocompleteProps {
  items: YoutubeVideosQuery['youtubeVideos'];
  label?: string;
  placeholder?: string;
  loading?: boolean;
  onChangeInputValue?: InputBaseProps['onChange'];
  error?: string;
}

type AutocompleteWithDownshiftType = PropGetters<DropdownItem> & Actions<DropdownItem> & DownshiftState<DropdownItem>;

export const Autocomplete: React.FC<AutocompleteProps> = props => {
  const classes = useStyles();

  const inputRef = React.useRef<HTMLInputElement>();

  const [previewSong, setPreviewSong] = useState<YoutubeVideo>();

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
          component="div"
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
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: suggestion.snippet.title }} />
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
        inputRef,
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
          <div className={classes.formContainer}>
            <ReSearch
              {..._inputProps}
              id="search-song-input"
              className={classes.researchContainer}
              placeholder={`Type song's name e.g "When you believe"`}
              fullWidth
              icon={props.loading && <CircularProgress size={24} />}
              iconButton={!!_inputProps.value}
              onIconClick={() => {
                reset();
                clearSelection();
              }}
            />
            <AddButton
              previewSong={previewSong}
              postSubmit={() => {
                reset();
                clearSelection();
                if (inputRef.current) inputRef.current.focus();
              }}
            />
          </div>
          <div {...getMenuProps()}>
            {isOpen && props.items.length > 0 ? (
              <Paper className={classes.paper} id="search-song-menu">
                {props.items.map((item, index) => renderSuggestion({ index, options, suggestion: item }))}
              </Paper>
            ) : null}
          </div>
          <Preview previewSong={previewSong} />
        </div>
      );
    },
    [
      props,
      classes.downShiftContentContainer,
      classes.formContainer,
      classes.researchContainer,
      classes.paper,
      previewSong,
      renderSuggestion,
    ],
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
