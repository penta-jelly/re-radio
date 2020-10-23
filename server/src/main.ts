import { DEFAULT_WORKERS, Worker } from './workers';
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/order
import yargs = require('yargs');

type Application = 'radio' | 'real-time-radio';
const DEFAULT_APPLICATIONS: Application[] = ['radio', 'real-time-radio'];

yargs
  .command(
    'serve <app>',
    'start the application',
    (yargs) => {
      yargs
        .positional('app', {
          describe: 'which application to start',
          type: 'string',
          choices: DEFAULT_APPLICATIONS,
        })
        .help();
    },
    (argv: yargs.Arguments<{ app: Application }>) => {
      switch (argv.app) {
        case 'radio':
          require('./radio').bootstrap();
          break;

        case 'real-time-radio':
          require('./real-time-radio').bootstrap();
          break;
      }
    },
  )
  .command(
    'run <worker>',
    'run pre-defined worker',
    (yargs) => {
      yargs
        .positional('worker', {
          describe: 'which worker to run',
          type: 'string',
          choices: DEFAULT_WORKERS,
        })
        .help();
    },
    (argv: yargs.Arguments<{ worker: Worker }>) => {
      require('./workers').bootstrap(argv.worker);
    },
  )
  .demandCommand(1)
  .help().argv;
