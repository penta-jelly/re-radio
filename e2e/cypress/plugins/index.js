/* eslint-disable @typescript-eslint/no-var-requires */
const browserify = require('@cypress/browserify-preprocessor');

module.exports = on => {
  const options = {
    browserifyOptions: {
      extensions: ['.js', '.ts'],
      plugin: [['tsify']],
    },
  };
  on('file:preprocessor', browserify(options));
};
