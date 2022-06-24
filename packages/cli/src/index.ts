#!/usr/bin/env node
import { Command } from 'commander'
import { dev } from './commands/dev'
import { create } from './commands/create'
import { buildApp } from './commands/build'
import { compile } from './commands/compile'

const program = new Command()

program
  // eslint-disable-next-line global-require
  .version(`lin-vue-cli ${require('../package.json').version}`)
  .usage('<command> [options]')

program
  .command('dev')
  .description('Run dev')
  .option('-s,--simple', 'only start sever, not create config ')
  .action(dev)

program.command('create <name>').description('Create Component').action(create)

program.command('build').description('Run build').action(buildApp)

program.command('compile').description('Run compile').action(compile)

program.parse()
