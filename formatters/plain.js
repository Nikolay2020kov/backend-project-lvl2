import _ from 'lodash';

const formattedValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const formatKey = (parentKey, key) => {
  if (parentKey === '') {
    return key;
  }
  return `${parentKey}.${key}`;
};

const plain = (diff) => {
/*
console.log(diff);
 diff = diff.sort(function (a, b) {
  if (a.key > b.key) {
    return 1;
  }
  if (a.key < b.key) {
    return -1;
  }
  // a должно быть равным b
  return 0;
 });
console.log(diff); */

  const result = diff.map((item) => {
    const iter = (iterItem, startKey = '') => {
      const {
        key, OldValue, NewValue, value, type, children,
      } = iterItem;
      const newKey = formatKey(startKey, key);
      switch (type) {
        case 'added':
          return `Property '${newKey}' was added with value: ${formattedValue(value)}`;
        case 'deleted':
          return `Property '${newKey}' was removed`;
        case 'change':
          return `Property '${newKey}' was updated. From ${formattedValue(OldValue)} to ${formattedValue(NewValue)}`;
        case 'equal':
          return null;
        case 'tree':
          return children.map((innerItem) => iter(innerItem, newKey)).filter((innerValue) => innerValue !== null).join('\n');
        default:
          throw new Error(`Wrong type ${type}`);
      }
    };
    return iter(item);
  });
  return result.sort().join('\n');
};

export default plain;
