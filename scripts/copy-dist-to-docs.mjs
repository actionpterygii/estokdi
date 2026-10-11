import { cpSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distPath = resolve(projectRoot, 'dist');
const docsPath = resolve(projectRoot, 'docs');

if (!existsSync(distPath)) {
	console.error('dist/ が見つかりません。先に `npm run build` を実行してください。');
	process.exitCode = 1;
} else {
	cpSync(distPath, docsPath, { recursive: true, force: true });
	console.log('dist/ の内容を docs/ にコピーしました。既存の docs/ 固有ファイルは保持しています。');
}
