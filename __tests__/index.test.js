import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
const result = readFile('../__fixtures__/outputjson.txt');
const a = result.trim();
const x = '/home/xehlet/backend-project-lvl2/__fixtures__/file1.json';
const y = '/home/xehlet/backend-project-lvl2/__fixtures__/file2.json';
test('genDiff', () => {
  expect(genDiff(x, y)).toEqual(a);
});
