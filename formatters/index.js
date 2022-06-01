import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formats = (tree, option) => {
  if (option === 'plain') {
    return plain(tree);
  }
  if (option === 'json') {
    return json(tree);
  }
  if (option === 'stylish' || option === undefined) {
    return stylish(tree);
  }
  return 'Error - Wrong type!';
};
export default formats;
