import { copyFileSync } from 'node:fs';
import { build } from 'tsdown';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
for (const edition of ['pink', 'purple']) {
  const dir = new URL(`sakura-${edition}/`, root);
  copyFileSync(new URL('shared/surfaces.css', root), new URL('src/client/shared-surfaces.css', dir));
  await build({ cwd: fileURLToPath(dir), config: fileURLToPath(new URL('tsdown.config.ts', dir)) });
}
