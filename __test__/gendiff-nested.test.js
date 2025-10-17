import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fx = (name) => join(__dirname, '..', '__fixtures__', name);
const read = (name) => fs.readFileSync(fx(name), 'utf-8');

// Normaliza saltos de línea y recorta espacios extremos (evita fallas por \r\n vs \n)
// Normaliza saltos de línea y quita espacios al final de cada línea
const normalize = (s) => s
  .replace(/\r\n/g, '\n')   // normaliza saltos
  .split('\n')              // divide en líneas
  .map(line => line.trimEnd()) // elimina espacios al final
  .join('\n')               // vuelve a unir
  .trim();                  // quita espacios iniciales y finales del texto


test('gendiff compara JSON anidado en formato stylish (por defecto)', () => {
  const file1 = fx('nested1.json');
  const file2 = fx('nested2.json');
  const expected = read('expected_nested.txt');

  const actual = genDiff(file1, file2);           // format default: 'stylish'
  expect(normalize(actual)).toEqual(normalize(expected));
});
