import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('gendiff compara archivos YAML planos correctamente', () => {
  const file1Path = join(__dirname, '..', '__fixtures__', 'file1.yml');
  const file2Path = join(__dirname, '..', '__fixtures__', 'file2.yml');
  const expected = fs.readFileSync(join(__dirname, '..', '__fixtures__', 'expected.txt'), 'utf-8');

    expect(genDiff(file1Path, file2Path).replace(/\r\n/g, '\n').trim()).toEqual(expected.replace(/\r\n/g, '\n').trim());
});


