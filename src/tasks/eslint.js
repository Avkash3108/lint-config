const pathUtils = require('../utils/pathUtils');
const shelljs = require('shelljs');

function run(params) {
    console.log(`Running eslint on ${params.files}`);
    const linter = pathUtils.getPackagePath('eslint', 'bin/eslint');
    const formatter = pathUtils.getPackagePath('eslint-formatter-pretty', 'index.js');
    const fix = params.fix ? '--fix' : '';
    const extensions = `--ext ${params.extensions}`;
    const files = params.files;
    const command = `node ${linter} --report-unused-disable-directives ${fix} --format "${formatter}" ${extensions} ${files}`;
    const result = shelljs.exec(command);
    const success = 0;

    if (result.code !== undefined && result.code !== success) {
        shelljs.exit(result.code);
    }
    return result;
}

exports.command = 'eslint';
exports.describe = 'Run eslint over the consuming package based on given configurations.'
exports.builder = {
    files: {
        default:  '*js __tests__ bin examples src test',
        type: 'string'
    },
    fix: {
        default: false,
        type: 'boolean'
    },
    extensions: {
        default: 'js, jsx, ts, tsx',
        type: 'string'
    }
};
exports.handler = run