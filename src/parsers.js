// src/parsers.js
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Esta función lee un archivo y lo convierte en un objeto de JavaScript
const parseData = (filepath) => {
  // 1. Obtener la extensión (por ejemplo ".json" o ".yml")
  const extension = path.extname(filepath);

  // 2. Leer el contenido del archivo como texto
  const content = fs.readFileSync(filepath, 'utf-8');

  // 3. Convertir el texto según el tipo de archivo
  if (extension === '.json') {
    return JSON.parse(content);
  }

  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(content);
  }

  // 4. Si no es ninguno de esos tipos, mostrar error
  throw new Error(`Formato no soportado: ${extension}`);
};

export default parseData;
