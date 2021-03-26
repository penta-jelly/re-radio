const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            ['@apollo/client']: path.resolve(__dirname, 'node_modules', '@apollo', 'client'),
            ['react']: path.resolve(__dirname, 'node_modules', 'react'),
            ['subscriptions-transport-ws']: path.resolve(__dirname, 'node_modules', 'subscriptions-transport-ws'),
          },
        },
      ],
    ],
  };
};
