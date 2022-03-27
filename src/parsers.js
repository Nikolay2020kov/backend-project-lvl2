import { load } from 'js-yaml';
import path from 'path';
import fs from 'fs';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');

const parses = (filename) => {
  if (path.extname(filename) === '.json' || path.extname(filename) === '') {
    return JSON.parse(readFile(filename));
  }
  if (path.extname(filename) === '.yml') {
    return load(readFile(filename));
  }
  if (path.extname(filename) === '.yaml') {
    return load(readFile(filename));
  }
  return 0;
};
export default parses;
