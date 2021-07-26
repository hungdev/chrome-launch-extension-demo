#!/usr/bin/env node
const execa = require('execa');
const { spawnSync, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const clear = require('clear');

const rootPath = path.resolve(__dirname);
const repoPath = path.resolve(__dirname, 'repository');
const extensionPath = path.resolve(__dirname, 'extension');
const basePath = path.basename(process.cwd());

const args = [
    "clone",
    "git@scm.wcs.fortna.com:microfe/chrome-extension.git",
    "repository",
    "--progress"
];

clear();

const spinner = ora('Loading resource...').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading resource...';
}, 1000);

execSync(`rm -rf ${repoPath}`);
const child = spawnSync("git", args, { cwd: rootPath });

if(child.status != 0) {
    console.log('ceee')
    setTimeout(() => {
        spinner.fail('source download failed!')
    }, 3000);
    return
}


console.log(`${child.stderr}`);


execSync(`rm -rf ${extensionPath} && mkdir ${extensionPath}`);

execSync(`cd ${repoPath} && cp -r extension/* ../extension && rm -rf ${repoPath}`);

execa('node', [path.join(__dirname, 'chrome-launch-exc.js')]).stdout.pipe(process.stdout);
spinner.succeed('Done');