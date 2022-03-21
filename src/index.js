import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');

const genDiff = (filepath1, filepath2) => {
const fileContent1 = readFile(filepath1);
const fileContent2 = readFile(filepath2);
const data1 = JSON.parse(fileContent1);
const data2 = JSON.parse(fileContent2);

const mass = {...data1, ...data2};
const mass1 = _.sortBy(Object.keys(mass));
//console.log(data1);
//console.log(data2);
//console.log(mass1);
console.log('{');
for(const key of mass1) {
  if(_.has(data1, key) === true && _.has(data2, key) === true){
    if(data1[key] == data2[key]){
    console.log(`    ${key}: ${data1[key]}`);
   }
   if(data1[key] != data2[key]){
    console.log(`  - ${key}: ${data1[key]}`);
    console.log(`  + ${key}: ${data2[key]}`);
   }
  }
  if(_.has(data1, key) === true && _.has(data2, key) === false) {
    console.log(`  - ${key}: ${data1[key]}`);
  }
  if(_.has(data1, key) === false && _.has(data2, key) === true) {
    console.log(`  + ${key}: ${data2[key]}`);
  }
};
console.log('}');
};
export default genDiff;
