import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');

const genDiff = (filepath1, filepath2) => {
  const result = new Array;
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);
  const data1 = JSON.parse(fileContent1);
  const data2 = JSON.parse(fileContent2);
result.push('{');
  
  const mass = { ...data1, ...data2 };
  const mass1 = _.sortBy(Object.keys(mass));

  for (const key of mass1) {
    if (_.has(data1, key) === true && _.has(data2, key) === true) { 
      if (data1[key] === data2[key]) {
	result.push(`    ${key}: ${data1[key]}`);
      }
      if(data1[key] !== data2[key]){
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
   }
  
 result.push('}');
 result.push('');

console.log (result.join('\n').toString());

return (result.join('\n').toString());
};



export default genDiff;
