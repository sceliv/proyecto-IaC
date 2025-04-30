const log = (message) => {
  const timestamp = new Date().toISOString(); // Obtener hora actual en formato ISO
  console.log(`[${timestamp}] ${message}`); // Mostrar mensaje con timestamp
};

module.exports = { log }; // Exportar función de logeo para usarla en otros módulos