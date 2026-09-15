import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(__dirname, '..', '..');
export const AUTH_DIR = join(ROOT, '.auth');
export const AUTH_STATE = join(AUTH_DIR, 'nykaa-state.json');
export const OUTPUT_DIR = join(ROOT, 'output');
export const SCENARIOS_DIR = join(__dirname, '..', 'scenarios');
export const SCREENSHOTS_WEB = join(ROOT, 'screenshots', 'web');
export const SCREENSHOTS_GOOD = join(ROOT, 'screenshots', 'good');
export const SCREENSHOTS_BAD = join(ROOT, 'screenshots', 'bad');
