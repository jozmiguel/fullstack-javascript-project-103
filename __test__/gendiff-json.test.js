import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fx = (name) => join(__dirname, '..', '__fixtures__', name);
const read = (name) => fs.readFileSync(fx(name), 'utf-8');

test('gendiff formato JSON genera estructura válida', () => {
  const file1 = fx('nested1.json');
  const file2 = fx('nested2.json');
  const expected = read('expected_json.txt');

  // Generamos la salida real
  const actual = genDiff(file1, file2, 'json');

  // Convertimos ambas a objetos para comparar estructura (no espacios)
  expect(JSON.parse(actual)).toEqual(JSON.parse(expected));
});
