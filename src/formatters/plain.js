// src/formatters/plain.js

// Convierte el valor a texto, siguiendo las reglas del formato plain
const formatValue = (value) => {
  if (value === null) return 'null';
  if (typeof value === 'string') return `'${value}'`;
  if (typeof value === 'object') return '[complex value]';
  return String(value);
};

// Recorre el árbol de diferencias y genera frases como:
// Property 'a.b' was added with value: 123
const plain = (diffTree, path = '') => {
  const lines = diffTree.flatMap((node) => {
    const property = path ? `${path}.${node.key}` : node.key;

    switch (node.type) {
      case 'added':
        return `Property '${property}' was added with value: ${formatValue(node.value)}`;

      case 'removed':
        return `Property '${property}' was removed`;

      case 'changed':
        return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;

      case 'nested':
        // Si es un objeto anidado, seguimos bajando
        return plain(node.children, property);

      case 'unchanged':
        // No mostramos las propiedades sin cambios
        return [];

      default:
        return [];
    }
  });

  return lines.join('\n');
};

export default plain;
