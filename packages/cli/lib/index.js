#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var dev_1 = require("./commands/dev");
var create_1 = require("./commands/create");
var program = new commander_1.Command();
program
    // eslint-disable-next-line global-require
    .version("lin-vue-cli ".concat(require('../package.json').version))
    .usage('<command> [options]');
program.command('dev').description('Run dev').action(dev_1.dev);
program.command('create <name>').description('Create Component').action(create_1.create);
program.parse();
