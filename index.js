const execa = require('execa');

execa('node', ['chrome-launch-exc.js']).stdout.pipe(process.stdout);
