// src/formatters/json.js
// Convierte el árbol de diferencias (diffTree) a un JSON legible
const formatJson = (diffTree) => JSON.stringify(diffTree, null, 2);

export default formatJson;
