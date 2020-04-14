/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require('path');
const Pkg = require('pkg');
const Shell = require('shelljs');

async function bundle() {
  const target = 'host';
  const packages = [
    {
      input: 'package.json',
      output: Path.join(process.cwd(), 'dist', 'app'),
    },
    {
      input: '.env',
      output: Path.join(process.cwd(), 'dist', '.env'),
    },
    {
      input: Path.join(process.cwd(), '..', 'client', 'build'),
      output: Path.join(process.cwd(), 'dist', 'static'),
    },
  ];

  console.log('Start building the distribution packages');
  await Pkg.exec([packages[0].input, '--target', target, '--output', packages[0].output]);

  console.log('Move default .env to distribution');
  Shell.cp('-R', packages[1].input, packages[1].output);

  console.log('Move client bundle to distribution');
  Shell.cp('-R', packages[2].input, packages[2].output);

  console.log('Finished building distribution packages:');
  console.table(packages);
}

bundle();
