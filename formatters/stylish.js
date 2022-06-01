import _ from 'lodash';

const tab = '  ';
const openingBracket = '{';
const closingBracket = '}';
const deepShiftItem = 2;

const formatItem = (key, tabulation, sign = ' ') => `${tabulation}${sign} ${key}`;

const valueVerification = (value, tabulation) => {
  if (!_.isObject(value)) {
    return value;
  }
  const newTab = formatItem(tab, tabulation);
  const collPairs = _.toPairs(value);
  const newX = collPairs.flatMap(([key, innerValue]) => {
    if (_.isObject(innerValue)) {
      return `${formatItem(key, newTab)}: ${valueVerification(innerValue, newTab)}`;
    }
    return `${formatItem(key, newTab)}: ${innerValue}`;
  });
  return [openingBracket, `${newX.join('\n')}`, `${formatItem(closingBracket, tabulation)}`].join('\n');
};

const stylish = (coll) => {
  const iter = (innerColl, depth) => {
    const newTab = tab.repeat(depth);
    const result = innerColl.flatMap((obj) => {
      const {
        key, value, OldValue, NewValue, type, children,
      } = obj;
      switch (type) {
        case 'added':
          return `${formatItem(key, newTab, '+')}: ${valueVerification(value, newTab)}`;
        case 'deleted':
          return `${formatItem(key, newTab, '-')}: ${valueVerification(value, newTab)}`;
        case 'change':
          return [`${formatItem(key, newTab, '+')}: ${valueVerification(NewValue, newTab)}`,
            `${formatItem(key, newTab, '-')}: ${valueVerification(OldValue, newTab)}`];
        case 'equal':
          return `${formatItem(key, newTab)}: ${valueVerification(value, newTab)}`;
        case 'tree':
          return `${formatItem(key, newTab)}: ${openingBracket}\n${iter(children, depth + deepShiftItem)}\n${formatItem(closingBracket, newTab)}`;
        default:
          throw new Error(`Wrong type ${type}`);
      }
    });
    return result.join('\n');
  };
  return [openingBracket, iter(coll, 1), closingBracket].join('\n');
};
export default stylish;
