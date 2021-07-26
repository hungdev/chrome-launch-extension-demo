#!/usr/bin/env node
const execa = require('execa');
const { spawnSync, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const clear = require('clear');
const cliProgress = require('cli-progress');

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

const barStatus = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const spinner = ora('Loading resource...').start();
barStatus.start(100, 0);

console.log('Hello world!');
console.log(repoPath);
console.log(process.cwd());
console.log(rootPath);
console.log('=======================');
console.log(basePath);

execSync(`rm -rf ${repoPath}`);
const child = spawnSync("git", args, { cwd: rootPath });

console.log('Hello world!222');

console.log(`${child.stderr}`);

console.log('Hello world!xxxxx');

execSync(`rm -rf ${extensionPath} && mkdir ${extensionPath}`);

console.log('hello 22222222211111111111');

execSync(`cd ${repoPath} && cp -r extension/* ../extension && rm -rf ${repoPath}`);

barStatus.update(50);

console.log('Hello world!333');

execa('node', [path.join(__dirname, 'chrome-launch-exc.js')]).stdout.pipe(process.stdout);
bar1.stop();
spinner.succeed('Done');