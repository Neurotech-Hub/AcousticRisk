// Converts manuscript/refs/references.bib into src/content/refs.json so the
// companion cites exactly what the manuscript cites. Run automatically by
// `npm run dev` / `npm run build`.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const bibPath = resolve(here, '../../manuscript/refs/references.bib');
const outPath = resolve(here, '../src/content/refs.json');

const clean = (s) =>
  s
    .replace(/^\{+|\}+$/g, '')
    .replace(/\\&/g, '&')
    .replace(/\{|\}/g, '')
    .replace(/\s+/g, ' ')
    .trim();

function fields(body) {
  const out = {};
  const re = /(\w+)\s*=\s*\{((?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*)\}/g;
  let m;
  while ((m = re.exec(body))) out[m[1].toLowerCase()] = clean(m[2]);
  return out;
}

function lastName(a) {
  if (a.includes(',')) return a.split(',')[0].trim();
  const parts = a.trim().split(/\s+/);
  return parts[parts.length - 1];
}

function short(authors, year) {
  const names = authors.map(lastName);
  if (names.length === 0) return `${year}`;
  if (names.length === 1) return `${names[0]} ${year}`;
  if (names.length === 2) return `${names[0]} & ${names[1]} ${year}`;
  return `${names[0]} et al. ${year}`;
}

const text = readFileSync(bibPath, 'utf8');
const refs = {};
const entryRe = /@(\w+)\{([^,\s]+),([\s\S]*?)\n\}\s*(?=\n@|\n*$)/g;
let m;
while ((m = entryRe.exec(text))) {
  const [, , key, body] = m;
  const f = fields(body);
  const authors = (f.author || f.editor || '')
    .split(/\s+and\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  refs[key] = {
    key,
    authors,
    year: f.year || '',
    title: f.title || '',
    venue: f.journal || f.booktitle || f.publisher || '',
    volume: f.volume || '',
    pages: (f.pages || '').replace(/--/g, '\u2013'),
    doi: f.doi || '',
    short: short(authors, f.year || ''),
  };
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(refs, null, 1) + '\n');
console.log(`refs.json: ${Object.keys(refs).length} entries`);
