const { spawn } = require('child_process');

const args = process.argv.slice(2);
const child = spawn('npx', ['next', 'dev', ...args], { stdio: ['inherit', 'inherit', 'pipe'] });

child.stderr.on('data', (data) => {
  const str = data.toString();
  const lines = str.split('\n');
  const filteredLines = lines.filter(line => !line.includes('MallocStackLogging'));
  
  process.stderr.write(filteredLines.join('\n'));
});

child.on('close', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code || 0);
  }
});
