#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var dev_1 = require("./commands/dev");
var program = new commander_1.Command();
program.version("lin-vue-cli ".concat(require('../package.json').version)).usage('<command> [options]');
program
    .command('dev')
    .description('Run dev')
    .action(dev_1.dev);
program.parse();
