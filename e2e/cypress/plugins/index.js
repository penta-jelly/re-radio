const Path = require('path');
const Fs = require('fs');
const wp = require('@cypress/webpack-preprocessor');
const dotenv = require('dotenv');

module.exports = on => {
  const options = {
    webpackOptions: require('../webpack.config'),
  };
  on('file:preprocessor', wp(options));
  
  if(!process.env.CI) {
    const envFile = Path.resolve(process.cwd(), '..', '.env');
    const envFileContent = Fs.readFileSync(envFile);
    const env = dotenv.parse(envFileContent);

    return {    
      baseUrl: `http://${env.HOST_NAME}:3000`,
    }
  }
};
