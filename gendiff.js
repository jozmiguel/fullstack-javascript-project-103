#!/usr/bin/env node

// Importamos la librería commander (sirve para leer comandos en la terminal)
import { Command } from 'commander';

// Importamos nuestra función principal desde src/index.js
import genDiff from './src/index.js';

// Creamos un nuevo "programa" (nuestra app en la terminal)
const program = new Command();

// Configuramos el programa paso a paso
program
  .name('gendiff') // Nombre del comando
  .description('Compares two configuration files and shows a difference.') // Descripción
  .version('1.0.0') // Versión del programa

  // Definimos los dos archivos que el usuario debe pasar
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')

  // Agregamos una opción -f o --format para el formato de salida
  .option('-f, --format <type>', 'output format (example: stylish, plain, json)', 'stylish')

  // Acción que se ejecuta cuando el usuario usa el comando
  .action((filepath1, filepath2, options) => {
    // Llamamos a la función que compara los archivos
    const result = genDiff(filepath1, filepath2, options.format);

    // Mostramos el resultado en la terminal
    console.log(result);
  });

// Esta línea hace que el programa lea los argumentos escritos en la terminal
program.parse();


