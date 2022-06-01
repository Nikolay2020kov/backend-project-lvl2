import stylish from './stylish.js';
import plain from './plain.js';

const formats = (tree, option) => {
  if (option === 'plain') {
    return plain(tree);
  }
  if (option === 'stylish' || option === undefined) {
    return stylish(tree);
  }
  return 'Error - Wrong type!';
};
export default formats;
