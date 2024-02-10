const { spawn } = require('child_process');

const analizarSentimiento = (requestId) => {
  const python = spawn('python', ['../sentiment_analysis/main.py', requestId]);

  python.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  python.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

analizarSentimiento(1);

module.exports = analizarSentimiento;