#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from './src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    // Por ahora no hacemos nada con los archivos
    // pero aquí es donde luego usaremos genDiff(filepath1, filepath2, options.format)
    console.log(`Comparing: ${filepath1} vs ${filepath2}`);
    if (options.format) {
      console.log(`Selected format: ${options.format}`);
    }
  });

program.parse(process.argv);
