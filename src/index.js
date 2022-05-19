import _ from "lodash";
import parses from './parsers.js';
import ast from './tree.js';
import stylish from './formatter.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = parses(filepath1);
  const data2 = parses(filepath2);
  const tree = ast(data1,data2); 
  const format = stylish(tree);
};
export default genDiff;
