// src/formatters/index.js
import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
};

const getFormatter = (formatName) => formatters[formatName] || formatStylish;

export default getFormatter;
