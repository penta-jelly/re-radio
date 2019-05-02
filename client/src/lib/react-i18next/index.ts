import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from 'translations/en-US/common.json';
import stationsEN from 'translations/en-US/stations.json';
import commonVI from 'translations/vi-VN/common.json';
import stationsVI from 'translations/vi-VN/stations.json';

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
      },
      'vi-VN': {
        common: commonVI,
        stations: stationsVI,
      },
    },
  });
