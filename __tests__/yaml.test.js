import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => getFixturePath(filename);
const result = readFileSync(readFile('../__fixtures__/outputyaml.txt'), 'utf-8');
const a = result.trim();
const x = readFile('../__fixtures__/file1.yaml');
const y = readFile('../__fixtures__/file2.yaml');
test('gendiff', () => {
  expect(gendiff(x, y)).toEqual(a);
});
