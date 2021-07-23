#!/usr/bin/env node
const execa = require('execa');
const { spawnSync, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk')

const rootPath = path.resolve(__dirname);
const repoPath = path.resolve(__dirname, 'repository');
const extensionPath = path.resolve(__dirname, 'extension');

const args = [
    "clone",
    "git@scm.wcs.fortna.com:microfe/chrome-extension.git",
    "repository",
    "--progress"
];

const spinner = ora('Loading resource...').start();

console.log('Hello world!')
console.log(repoPath)
console.log(process.cwd())
console.log(rootPath)

execSync(`rm -rf ${repoPath}`);
const child = spawnSync("git", args);

console.log('Hello world!222')

console.log(`${child.stderr}`);

console.log('Hello world!xxxxx')

execSync(`rm -rf ${extensionPath} && mkdir ${extensionPath}`);

console.log('hello 22222222211111111111')

execSync(`cd ${repoPath} && cp -r extension/* ../extension && rm -rf ${repoPath}`)


console.log('Hello world!333')


execa('node', ['chrome-launch-exc.js']).stdout.pipe(process.stdout);

spinner.succeed('Done');