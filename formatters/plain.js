import _ from 'lodash';

const proverka = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (value === '0') {
    return '0';
  }
  if (value === true || value === false || value === null) {
    return `${value}`;
  }
  return `'${value}'`;
};

let k;

const plain = (diff, a = '') => {
  const maps = diff.map((obj) => {
    const {
      key, value, OldValue, NewValue, children, type,
    } = obj;
    if (type === 'added') {
      return `Property '${a}${key}' was added with value: ${proverka(value)}`;
    }
    if (type === 'deleted') {
      return `Property '${a}${key}' was removed`;
    }
    if (type === 'change') {
      return `Property '${a}${key}' was updated. From ${proverka(OldValue)} to ${proverka(NewValue)}`;
    }
    if (type === 'equal') {
      return null;
    }
    if (type === 'tree') {
      k = `${a + key}.`;
      return plain(children, k);
    }
    return 0;
  }).filter((f) => f !== null);
  return maps.join('\n');
};

export default plain;
