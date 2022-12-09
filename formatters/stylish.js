import _ from 'lodash';

const OpenSign = '{';
const CloseSign = '}';
const tab = '  ';
const repeatTab = 2;

const indent = (key, tabulation, sign = ' ') => `${tabulation}${sign} ${key}`;

const proverka = (value, tabulation) => {
  if (!_.isObject(value)) {
    return value;
  }
  const newTab = indent(tab, tabulation);
  const Pairs = _.toPairs(value);
  const newValue = Pairs.flatMap(([key, innerValue]) => {
    if (_.isObject(innerValue)) {
      return `${indent(key, newTab)}: ${proverka(innerValue, newTab)}`;
    }
    return `${indent(key, newTab)}: ${innerValue}`;
  });
  return [OpenSign, `${newValue.join('\n')}`, `${indent(CloseSign, tabulation)}`].join('\n');
};

const stylish = (tree) => {
  const stylish1 = (tree1, depth) => {
    const newTab = tab.repeat(depth);
    const maps = tree1.map((obj) => {
      const {
        key, value, OldValue, NewValue, children, type,
      } = obj;
      if (type === 'added') {
        return `${indent(key, newTab, '+')}: ${proverka(value, newTab)}`;
      }
      if (type === 'deleted') {
        return `${indent(key, newTab, '-')}: ${proverka(value, newTab)}`;
      }
      if (type === 'change') {
        return `${indent(key, newTab, '-')}: ${proverka(OldValue, newTab)}\n${indent(key, newTab, '+')}: ${proverka(NewValue, newTab)}`;
      }
      if (type === 'equal') {
        return `${indent(key, newTab)}: ${proverka(value, newTab)}`;
      }
      if (type === 'tree') {
        return `${indent(key, newTab)}: ${OpenSign}\n${stylish1(children, depth + repeatTab)}\n${indent(CloseSign, newTab)}`;
      }
      return 0;
    });
    return maps.join('\n');
  };
  return [OpenSign, stylish1(tree, 1), CloseSign].join('\n');
};

export default stylish;
