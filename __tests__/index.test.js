import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');
const result = readFile('/home/xehlet/backend-project-lvl2/__fixtures__/outputjson.txt');
const a = result.trim();
const x = '/home/xehlet/backend-project-lvl2/__fixtures__/file1.json';
const y = '/home/xehlet/backend-project-lvl2/__fixtures__/file2.json';
test('genDiff', () => {
  expect(genDiff(x, y)).toEqual(a);
});
