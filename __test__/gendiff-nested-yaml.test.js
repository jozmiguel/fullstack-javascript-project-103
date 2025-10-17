import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fx = (name) => join(__dirname, '..', '__fixtures__', name);
const read = (name) => fs.readFileSync(fx(name), 'utf-8');

const normalize = (s) => s
  .replace(/\r\n/g, '\n')
  .split('\n')
  .map(line => line.trimEnd())
  .join('\n')
  .trim();

test('gendiff compara YAML anidado en formato stylish', () => {
  const file1 = fx('nested1.yml');
  const file2 = fx('nested2.yml');
  const expected = read('expected_nested.txt');

  const actual = genDiff(file1, file2); // formato por defecto: stylish
  expect(normalize(actual)).toEqual(normalize(expected));
});
