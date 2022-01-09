import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { Country } from 'countries-list';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';

interface Props {
  selectedRegion: string;
  onRegionChange?(selectedRegion: string): void;
}

export const PreferredRegionPicker: React.FC<Props> = (props) => {
  const [countries, setCountries] = React.useState<{ [key: string]: Country } | undefined>();

  const { selectedRegion, onRegionChange } = props;

  React.useEffect(() => {
    import('countries-list').then((module) => {
      setCountries(module.countries);
    });
  }, []);

  const uiCountries = React.useMemo(() => {
    if (!countries) {
      return [];
    }
    return Object.entries(countries)
      .map(([countryCode, country]) => ({ ...country, countryCode }))
      .filter(({ countryCode }) => countryCode !== selectedRegion);
  }, [countries, selectedRegion]);

  const onChange = React.useCallback<NonNullable<SelectInputProps['onChange']>>(
    (event) => {
      if (typeof event.target.value === 'string') onRegionChange?.(event.target.value);
    },
    [onRegionChange],
  );
  return (
    <Select value={selectedRegion} onChange={onChange}>
      <MenuItem key="selectedRegion" value={selectedRegion}>
        {countries ? countries[selectedRegion].native : selectedRegion}
      </MenuItem>
      {uiCountries.map((country) => (
        <MenuItem key={country.countryCode} value={country.countryCode}>
          {country.native}
        </MenuItem>
      ))}
    </Select>
  );
};
