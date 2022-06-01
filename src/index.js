import parses from './parsers.js';
import ast from './tree.js';
import formats from '../formatters/index.js';

const gendiff = (filepath1, filepath2, option) => {
  const data1 = parses(filepath1);
  const data2 = parses(filepath2);
  const tree = ast(data1, data2);
  const format = formats(tree, option);
  console.log(format);
  return format;
};
export default gendiff;
