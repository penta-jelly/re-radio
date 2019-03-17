import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from '../../translations/en-US/common.json';
import commonVI from '../../translations/vi-VN/common.json';

export const initI18n = () =>
  i18n.use(initReactI18next).init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en-US',
    resources: {
      'en-US': {
        common: commonEN,
      },
      'vi-VN': {
        common: commonVI,
      },
    },
  });
