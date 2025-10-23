// src/formatters/index.js
import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,   // 👈 agregado
};

const getFormatter = (formatName) => formatters[formatName] || formatStylish;

export default getFormatter;

