const pathUtils = require('../utils/pathUtils');
const shelljs = require('shelljs');
const fs = require('fs');

function getExistingFilesAndExtensions(params) {
    const existingFiles = [];
    const existingExtension = [];
    const sourceFiles = fs.readdirSync('.');
    const extensions = params.extensions.split(' ');
    const files = params.files.split(' ');

    extensions.forEach((extension) => {
        if (sourceFiles.some((name) => name.endsWith(extension))) {
            existingExtension.push(`${extension}`);
        }
    })
    const sourceFilesCache = new Set(sourceFiles);

    files.forEach((name) => {
        if (sourceFilesCache.has(name)) {
            existingFiles.push(name);
        }
    });

    return {
        extensions: `--ext ${existingExtension.join(' --ext ')}`,
        files: existingFiles.join(' ')
    }
}

function run(params) {
    const linter = pathUtils.getPackagePath('eslint', 'bin/eslint');
    const formatter = pathUtils.getPackagePath('eslint-formatter-pretty', 'index.js');
    const fix = params.fix ? '--fix' : '';
    const existingPatterns  = getExistingFilesAndExtensions(params);
    console.log(`Running eslint on ${existingPatterns.extensions}`);
    const command = `node ${linter} --report-unused-disable-directives ${fix} --format "${formatter}" ${existingPatterns.extensions} ${existingPatterns.files}`;
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
        default: '.js .ts .jsx .tsx',
        type: 'string'
    }
};
exports.handler = run