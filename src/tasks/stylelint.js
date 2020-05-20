const pathUtils = require('../utils/pathUtils');
const shelljs = require('shelljs');
const fs = require('fs');
const pathExists = require('path-exists');

function run(params) {
    const linter = pathUtils.getPackagePath('stylelint', 'bin/stylelint');
    const consumingPackageConfig = pathUtils.getConsumingPackageResourcePath('.stylelintrc');
    const defaultConfig = pathUtils.getPackagePath('@avkash3108/lint-config', 'configurations/.stylelintrc.json')
    const stylelintConfig = pathExists.sync(consumingPackageConfig) ? consumingPackageConfig : defaultConfig;

    const command = `node ${linter} ${params.files} --config "${stylelintConfig}"`;
    const result = shelljs.exec(command);
    const success = 0;
    if (result.code !== undefined && result.code !== success) {
        shelljs.exit(result.code);
    }
    return result;
}

exports.command = 'stylelint';
exports.describe = 'Run stylelint over the consuming package based on given or default configurations.'
exports.builder = {
    files: {
        default:  '"src/**/*.css" "src/**/*.scss"',
        type: 'string'
    }
};
exports.handler = run
