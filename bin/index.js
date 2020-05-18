#!/usr/bin/env node
const yargs = require('yargs');
const eslint = require('../src/task/eslint');
const stylelint = require('../src/task/stylelint');

yargs.scriptName("Run fake API")
  .usage('$0 <cmd> [args]')
  .command(eslint)
  .command(stylelint)
  .help()
  .argv
