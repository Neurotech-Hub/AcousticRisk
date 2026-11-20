import { describe, expect, it } from 'vitest';
import refs from './refs.json';

// Every source file that can cite a reference, read as raw text.
const sources = import.meta.glob(['../content/*.ts', '../sections/*.tsx', '../components/*.tsx'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// Bibliography keys look like Hare1998, LeDouxEtAl1984, GaidicaDantzer2020, ParsanaEtAl2012a.
const KEY = /'([A-Z][A-Za-z]+(?:19|20)\d\d[a-z]?)'/g;

describe('citations', () => {
  const list = Object.values(refs as Record<string, { key: string; doi: string }>);
  const known = new Set(Object.keys(refs));

  it('loads the generated bibliography', () => {
    expect(known.size).toBeGreaterThan(50);
  });

  it('scans the source files', () => {
    expect(Object.keys(sources).length).toBeGreaterThan(10);
  });

  it('every citation key used in the site exists in refs.json', () => {
    const missing: string[] = [];
    for (const [file, src] of Object.entries(sources)) {
      for (const m of src.matchAll(KEY)) if (!known.has(m[1])) missing.push(`${file}: ${m[1]}`);
    }
    expect(missing).toEqual([]);
  });

  it('most references have a DOI', () => {
    // A few older works have none; surface them so that is a conscious choice.
    const noDoi = list.filter((r) => !r.doi).map((r) => r.key);
    expect(noDoi.length).toBeLessThan(known.size / 2);
  });
});
