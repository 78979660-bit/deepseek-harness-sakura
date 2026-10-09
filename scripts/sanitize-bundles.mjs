import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
for (const edition of ['pink', 'purple']) {
  const file = new URL(`../sakura-${edition}/lib/client.js`, import.meta.url);
  const source = readFileSync(file, 'utf8');
  const clean = source.split('\n').map(line => {
    if (line.includes('C:\\Users\\') && /^\s*\/\/.*sakura-(?:css|image):/.test(line)) {
      return '// Embedded Sakura asset';
    }
    return line;
  }).join('\n');
  assert.ok(!clean.includes('C:\\Users\\'), 'Unexpected local path outside removable asset comments');
  writeFileSync(file, clean);
}
