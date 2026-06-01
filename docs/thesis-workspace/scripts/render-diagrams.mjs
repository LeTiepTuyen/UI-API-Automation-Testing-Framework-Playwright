import { readdir, mkdir } from 'node:fs/promises';
import { extname, basename, join } from 'node:path';
import { spawn } from 'node:child_process';

const srcDir = 'docs/thesis-workspace/assets/diagrams/src';
const outDir = 'docs/thesis-workspace/assets/diagrams/out';

async function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', shell: process.platform === 'win32' });
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(' ')} failed with exit code ${code}`));
    });
  });
}

await mkdir(outDir, { recursive: true });
const files = await readdir(srcDir);

for (const file of files) {
  if (extname(file) !== '.mmd') continue;
  const input = join(srcDir, file);
  const output = join(outDir, `${basename(file, '.mmd')}.svg`);
  console.log(`Rendering ${input} -> ${output}`);
  await run('npx', ['-y', '@mermaid-js/mermaid-cli', '-i', input, '-o', output, '-b', 'transparent']);
}

console.log('Diagram rendering completed.');
