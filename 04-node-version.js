#!/usr/bin/env node --harmony-destructuring
//destructuring is not supported in node v4 apparently, must use harmony destructuring,
//  however that prevents in from working on current version

const {versions: {node, v8}} = process;

console.log(`Node.js version: ${node} 
V8 version: ${v8}`);
