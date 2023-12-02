import { exec } from 'child_process';

export const analizarSentimiento = (requestId) => {
  // Ejecutar el script de Python con el requestId como argumento
  exec(`python ../sentiment_analysis/main.py ${requestId}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`Resultado: ${stdout}`);
  });
}
