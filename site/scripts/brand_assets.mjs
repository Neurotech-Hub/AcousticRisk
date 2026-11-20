// Derives site-ready logo assets from the source of truth in /brand.
//  - src/content/logo.json   path data for the <Logo /> component (recolorable)
//  - public/brand/logo-mark.svg   standalone teal mark on transparent
//  - public/favicon.svg           square favicon (paper mark on teal)
// The brand SVG draws the waveform and rodent in black with a white knockout
// stroke and a white eye. Here the black becomes currentColor and the white
// becomes the page background, so the mark works on any light surface.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(resolve(here, '../../brand/AcousticRisk_logoMark.svg'), 'utf8');

const viewBox = /viewBox="([^"]+)"/.exec(src)[1];
const paths = [...src.matchAll(/<path\b([^>]*)\/>/g)].map((m) => ({
  d: /\sd="([^"]+)"/.exec(m[1])[1],
  cls: (/class="([^"]+)"/.exec(m[1]) || [])[1] || '',
}));
const circle = /<circle[^>]*cx="([\d.]+)"[^>]*cy="([\d.]+)"[^>]*r="([\d.]+)"/.exec(src);

const wave = paths.find((p) => !p.cls);
const body = paths.filter((p) => p.cls === 'st0').map((p) => p.d); // outlined rodent pieces
const eye = paths.find((p) => p.cls === 'st1').d;
const nose = { cx: +circle[1], cy: +circle[2], r: +circle[3] };

const logo = { viewBox, wave: wave.d, body, eye, nose };
const outJson = resolve(here, '../src/content/logo.json');
mkdirSync(dirname(outJson), { recursive: true });
writeFileSync(outJson, JSON.stringify(logo));

const markup = (fill, knock) =>
  `<path fill="${fill}" d="${logo.wave}"/>` +
  logo.body.map((d) => `<path fill="${fill}" stroke="${knock}" stroke-width="6" stroke-miterlimit="10" d="${d}"/>`).join('') +
  `<path fill="${knock}" d="${logo.eye}"/><circle fill="${knock}" cx="${nose.cx}" cy="${nose.cy}" r="${nose.r}"/>`;

mkdirSync(resolve(here, '../public/brand'), { recursive: true });
writeFileSync(
  resolve(here, '../public/brand/logo-mark.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${markup('#162A2E', '#F7F5EE')}</svg>\n`,
);

// Favicon: crop to the rodent and the waves around it, light mark on a teal tile.
writeFileSync(
  resolve(here, '../public/favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#235B57"/>` +
    `<g transform="translate(5 17.5) scale(0.0465)">${markup('#F7F5EE', '#235B57')}</g></svg>\n`,
);
console.log('brand assets written');
