// src/formatters/stylish.js

// Indentación: 4 espacios por nivel
const indent = (depth) => '    '.repeat(depth);

// Indentación especial para poner el símbolo (+/-/ )
const markIndent = (depth) => `${'    '.repeat(depth).slice(0, -2)}  `;

// Convierte un valor a texto. Si es un objeto, lo imprime con sus claves indentadas.
const stringify = (value, depth) => {
  const isObject =
    value !== null && typeof value === 'object' && !Array.isArray(value);

  if (!isObject) return String(value);

  const entries = Object.entries(value).map(
    ([k, v]) => `${indent(depth + 1)}${k}: ${stringify(v, depth + 1)}`
  );

  return `{\n${entries.join('\n')}\n${indent(depth)}}`;
};

// Recorre el árbol de diff y arma las líneas con +, -, o espacio
const stylish = (diffTree, depth = 0) => {
  const lines = diffTree.flatMap((node) => {
    const { key, type } = node;

    switch (type) {
      case 'added':
        return `${markIndent(depth)}+ ${key}: ${stringify(node.value, depth)}`;

      case 'removed':
        return `${markIndent(depth)}- ${key}: ${stringify(node.value, depth)}`;

      case 'unchanged':
        return `${markIndent(depth)}  ${key}: ${stringify(node.value, depth)}`;

      case 'changed':
        return [
          `${markIndent(depth)}- ${key}: ${stringify(node.oldValue, depth)}`,
          `${markIndent(depth)}+ ${key}: ${stringify(node.newValue, depth)}`,
        ];

      case 'nested':
        return `${markIndent(depth)}  ${key}: {\n${stylish(node.children, depth + 1)}\n${indent(depth)}}`;

      default:
        return '';
    }
  });

  return lines.join('\n');
};

// Envoltorio final con llaves raíz
const formatStylish = (diffTree) => `{\n${stylish(diffTree, 0)}\n}`;

export default formatStylish;
