const { spawn } = require('child_process');
const child = spawn('npx', ['next', 'build', '--debug'], { cwd: process.cwd() });

child.stdout.on('data', (data) => {
  console.log(data.toString());
});

child.stderr.on('data', (data) => {
  console.error(data.toString());
});

child.on('exit', (code) => {
  console.log(`Exit code: ${code}`);
});
