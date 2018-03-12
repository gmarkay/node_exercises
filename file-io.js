#!/usr/bin/env node

const fs = require('fs');

let [,,file] = process.argv;

readFile = fs.readFileSync(file);

process.stdout.write(readFile);
