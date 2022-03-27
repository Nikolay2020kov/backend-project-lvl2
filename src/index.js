import _ from 'lodash';
import parses from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const result = [];
  const data1 = parses(filepath1);
  const data2 = parses(filepath2);
  const mass = { ...data1, ...data2 };
  const mass1 = _.sortBy(Object.keys(mass));
  result.push('{');
  mass1.forEach((key) => {
    if (_.has(data1, key) === true && _.has(data2, key) === true) {
      if (data1[key] === data2[key]) {
        result.push(`    ${key}: ${data1[key]}`);
      }
      if (data1[key] !== data2[key]) {
        result.push(`  - ${key}: ${data1[key]}`);
        result.push(`  + ${key}: ${data2[key]}`);
      }
    }

    if (_.has(data1, key) === true && _.has(data2, key) === false) {
      result.push(`  - ${key}: ${data1[key]}`);
    }
    if (_.has(data1, key) === false && _.has(data2, key) === true) {
      result.push(`  + ${key}: ${data2[key]}`);
    }
  });

  result.push('}');

  console.log(result.join('\n').toString());

  return (result.join('\n').toString());
};

export default genDiff;
