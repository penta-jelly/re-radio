/* eslint-disable @typescript-eslint/no-var-requires */
const browserify = require('@cypress/browserify-preprocessor');

module.exports = function (on) {
  const options = {
    typescript: require.resolve('typescript'),
  };
  on('file:preprocessor', browserify(options));
};
