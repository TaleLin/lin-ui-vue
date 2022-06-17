#!/usr/bin/env node
import { Command } from 'commander'
import { dev } from './commands/dev'

const program = new Command()

program
  // eslint-disable-next-line global-require
  .version(`lin-vue-cli ${require('../package.json').version}`)
  .usage('<command> [options]')

program.command('dev').description('Run dev').action(dev)

program.parse()
