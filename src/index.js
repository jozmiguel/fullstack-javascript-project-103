import fs from 'fs';
import path from 'path';

// Función principal: lee dos archivos JSON y los analiza
export default function genDiff(filepath1, filepath2) {
  // Convertir las rutas a rutas absolutas
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  // Leer los archivos (sincrónicamente)
  const fileContent1 = fs.readFileSync(absolutePath1, 'utf-8');
  const fileContent2 = fs.readFileSync(absolutePath2, 'utf-8');

  // Analizar (convertir JSON en objetos)
  const data1 = JSON.parse(fileContent1);
  const data2 = JSON.parse(fileContent2);

  // Mostrar en consola los resultados (por ahora)
  console.log('Archivo 1:', data1);
  console.log('Archivo 2:', data2);

  // Por ahora devolvemos algo simple (luego haremos la comparación)
  return '';
}

