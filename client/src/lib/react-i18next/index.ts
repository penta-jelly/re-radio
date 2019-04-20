import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from '../../translations/en-US/common.json';
import commonVI from '../../translations/vi-VN/common.json';
import stationsEN from '../../translations/en-US/stations.json';
import stationsVI from '../../translations/vi-VN/stations.json';
import stationEN from '../../translations/en-US/station.json';
import stationVI from '../../translations/vi-VN/station.json';

export const initI18n = () =>
  i18n.use(initReactI18next).init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en-US',
    resources: {
      'en-US': {
        common: commonEN,
        stations: stationsEN,
        station: stationEN,
      },
      'vi-VN': {
        common: commonVI,
        stations: stationsVI,
        station: stationVI,
      },
    },
  });
