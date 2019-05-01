import React, { useCallback, useState } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { InputBaseProps } from '@material-ui/core/InputBase';

import { useStyles } from './styles';

interface Props extends InputBaseProps {
  icon?: React.ReactNode;
}

export const ReSearch: React.FC<Props> = ({ icon, className, onBlur, onFocus, ...rest }) => {
  const classes = useStyles();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleInputFocus = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      setIsInputFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus],
  );
  const handleInputBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      setIsInputFocused(false);
      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur],
  );

  return (
    <div className={[classes.root, isInputFocused ? classes.rootFocused : '', className].join(' ').trim()}>
      <InputBase type="text" {...rest} onFocus={handleInputFocus} onBlur={handleInputBlur} />
      <SearchIcon className={classes.icon} />
    </div>
  );
};
