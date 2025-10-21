// src/index.js
import parseData from './parsers.js';
import buildDiff from './buildDiff.js';
import getFormatter from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parseData(filepath1);
  const data2 = parseData(filepath2);

  const diffTree = buildDiff(data1, data2);
  const format = getFormatter(formatName);

  return format(diffTree);
};

export default genDiff;

