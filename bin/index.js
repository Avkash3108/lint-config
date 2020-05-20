#!/usr/bin/env node
const yargs = require('yargs');
const eslint = require('../src/tasks/eslint');
const stylelint = require('../src/tasks/stylelint');

yargs.scriptName("Run fake API")
  .usage('$0 <cmd> [args]')
  .command(eslint)
  .command(stylelint)
  .help()
  .argv
