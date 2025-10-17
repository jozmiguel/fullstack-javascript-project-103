// src/index.js
import parseData from './parsers.js';
import buildDiff from './buildDiff.js';
import formatStylish from './formatters/stylish.js';

// Función principal: compara dos archivos y muestra el resultado
const genDiff = (filepath1, filepath2, format = 'stylish') => {
  // 1️⃣ Leer y convertir los archivos (JSON o YAML) en objetos JS
  const data1 = parseData(filepath1);
  const data2 = parseData(filepath2);

  // 2️⃣ Crear el árbol de diferencias
  const diffTree = buildDiff(data1, data2);

  // 3️⃣ Formatear el resultado según el formato elegido
  // (por ahora solo tenemos 'stylish')
  if (format === 'stylish') {
    return formatStylish(diffTree);
  }

  // Si alguien pone otro formato que aún no existe, mostramos stylish
  return formatStylish(diffTree);
};

export default genDiff;


