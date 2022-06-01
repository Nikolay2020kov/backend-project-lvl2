import _ from 'lodash';

const ast = (data1, data2) => {
  const mass = { ...data1, ...data2 };
  const keys = Object.keys(mass);
  return keys.map((key) => {
    if (_.isPlainObject(data1[key]) === true && _.isPlainObject(data2[key]) === true) {
      return { type: 'tree', key, children: ast(data1[key], data2[key]) };
    }
    if (_.has(data1, key) === true && _.has(data2, key) === true) {
      if (data1[key] === data2[key]) {
        return { type: 'equal', key, value: data1[key] };
      }
      if (data1[key] !== data2[key]) {
        return {
          type: 'change', key, OldValue: data1[key], NewValue: data2[key],
        };
      }
    }
    if (_.has(data1, key) === true && _.has(data2, key) === false) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (_.has(data1, key) === false && _.has(data2, key) === true) {
      return { type: 'added', key, value: data2[key] };
    }
    return 'Error - Wrong key!';
  }).sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });
};
export default ast;
