import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import parses from '../src/parsers.js';

const yy = 'Error - Wrong type!';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => getFixturePath(filename);

const aresult = readFileSync(readFile('../__fixtures__/parsers.txt'), 'utf-8');
const zak = aresult.trim();
const zac = readFile('../__fixtures__/file3.jsan');
test('parses', () => {
  expect(parses(zac)).toEqual(zak);
});

const result = readFileSync(readFile('../__fixtures__/OutputStylish.txt'), 'utf-8');
const a = result.trim();
const c = readFile('../__fixtures__/file1.json');
const d = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(c, d)).toEqual(a);
});

const g = readFile('../__fixtures__/file1.yaml');
const k = readFile('../__fixtures__/file2.yaml');
test('gendiff', () => {
  expect(gendiff(g, k)).toEqual(a);
});

const l = readFile('../__fixtures__/file1.yml');
const n = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(l, n)).toEqual(a);
});

const m = readFile('../__fixtures__/file1.json');
const o = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(m, o)).toEqual(a);
});

const p = readFile('../__fixtures__/file1.yaml');
const r = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(p, r)).toEqual(a);
});

const rp = readFile('../__fixtures__/file1.yaml');
const pr = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(rp, pr)).toEqual(a);
});

const ca = readFile('../__fixtures__/file1.json');
const db = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(ca, db, 'stylish')).toEqual(a);
});

const ag = readFile('../__fixtures__/file1.yaml');
const bk = readFile('../__fixtures__/file2.yaml');
test('gendiff', () => {
  expect(gendiff(ag, bk, 'stylish')).toEqual(a);
});

const lc = readFile('../__fixtures__/file1.yml');
const nd = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(lc, nd, 'stylish')).toEqual(a);
});

const am = readFile('../__fixtures__/file1.json');
const bo = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(am, bo, 'stylish')).toEqual(a);
});

const bp = readFile('../__fixtures__/file1.yaml');
const ra = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(bp, ra, 'stylish')).toEqual(a);
});

const pb = readFile('../__fixtures__/file1.yaml');
const ar = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(pb, ar, 'stylish')).toEqual(a);
});

const zxc = readFile('../__fixtures__/file1.json');
const cxz = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(zxc, cxz, 'styl')).toEqual(yy);
});

const res = readFileSync(readFile('../__fixtures__/OutputPlain.txt'), 'utf-8');
const b = res.trim();
const e = readFile('../__fixtures__/file1.json');
const f = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(e, f, 'plain')).toEqual(b);
});

const h = readFile('../__fixtures__/file1.yaml');
const j = readFile('../__fixtures__/file2.yaml');
test('gendiff', () => {
  expect(gendiff(h, j, 'plain')).toEqual(b);
});

const z = readFile('../__fixtures__/file1.yml');
const x = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(z, x, 'plain')).toEqual(b);
});

const q = readFile('../__fixtures__/file1.json');
const w = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(q, w, 'plain')).toEqual(b);
});

const v = readFile('../__fixtures__/file1.yaml');
const i = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(v, i, 'plain')).toEqual(b);
});

const iv = readFile('../__fixtures__/file1.yaml');
const vi = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(iv, vi, 'plain')).toEqual(b);
});

const resa = readFileSync(readFile('../__fixtures__/OutputJson.txt'), 'utf-8');
const ab = resa.trim();
const eg = readFile('../__fixtures__/file1.json');
const fg = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(eg, fg, 'json')).toEqual(ab);
});

const he = readFile('../__fixtures__/file1.yaml');
const je = readFile('../__fixtures__/file2.yaml');
test('gendiff', () => {
  expect(gendiff(he, je, 'json')).toEqual(ab);
});

const za = readFile('../__fixtures__/file1.yml');
const xa = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(za, xa, 'json')).toEqual(ab);
});

const qy = readFile('../__fixtures__/file1.json');
const wy = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(qy, wy, 'json')).toEqual(ab);
});

const av = readFile('../__fixtures__/file1.yaml');
const ai = readFile('../__fixtures__/file2.json');
test('gendiff', () => {
  expect(gendiff(av, ai, 'json')).toEqual(ab);
});

const va = readFile('../__fixtures__/file1.yaml');
const ia = readFile('../__fixtures__/file2.yml');
test('gendiff', () => {
  expect(gendiff(va, ia, 'json')).toEqual(ab);
});
