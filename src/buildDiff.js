// src/buildDiff.js
import _ from 'lodash';

// Pequeña ayuda: es un objeto "común" (no array, no null)
const isPlainObject = (val) => _.isObject(val) && !Array.isArray(val) && val !== null;

// Construye un "árbol de diferencias" recursivo
const buildDiff = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  return keys.map((key) => {
    const has1 = Object.prototype.hasOwnProperty.call(obj1, key);
    const has2 = Object.prototype.hasOwnProperty.call(obj2, key);

    if (!has1 && has2) {
      return { key, type: 'added', value: obj2[key] };
    }

    if (has1 && !has2) {
      return { key, type: 'removed', value: obj1[key] };
    }

    const val1 = obj1[key];
    const val2 = obj2[key];

    if (isPlainObject(val1) && isPlainObject(val2)) {
      return { key, type: 'nested', children: buildDiff(val1, val2) };
    }

    if (!_.isEqual(val1, val2)) {
      return { key, type: 'changed', oldValue: val1, newValue: val2 };
    }

    return { key, type: 'unchanged', value: val1 };
  });
};

export default buildDiff;
