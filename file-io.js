#!/usr/bin/env node

const fs = require('fs');
const { URL } = require('url');

let [,,...fileUrl] = process.argv;

writeUrl = new URL(`file:${fileUrl}`);

process.stdout.write(`${fs.readFileSync(writeUrl)} \n`);
