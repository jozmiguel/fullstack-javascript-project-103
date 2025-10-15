// src/index.js

import _ from 'lodash';
import parseData from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = parseData(filepath1);
  const data2 = parseData(filepath2);

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  const result = keys.map((key) => {
    if (!_.has(data2, key)) return `  - ${key}: ${data1[key]}`;
    if (!_.has(data1, key)) return `  + ${key}: ${data2[key]}`;
    if (_.isEqual(data1[key], data2[key])) return `    ${key}: ${data1[key]}`;
    return [`  - ${key}: ${data1[key]}`, `  + ${key}: ${data2[key]}`].join('\n');
  }).join('\n');

  return `{\n${result}\n}`.trim();
};

export default genDiff;
