
import { Command } from 'commander';
import genDiff from './src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

// No añadimos argumentos por ahora (así la ayuda coincide con la requerida)
program.parse(process.argv);
