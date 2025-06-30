export const nodeGlobals = {
  global: "readonly",
  process: "readonly",
  Buffer: "readonly",
  __dirname: "readonly",
  __filename: "readonly",
  console: "readonly",
  exports: "writable",
  module: "readonly",
  require: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
  setInterval: "readonly",
  clearInterval: "readonly",
  setImmediate: "readonly",
  clearImmediate: "readonly",
} as const;

export const browserGlobals = {
  window: "readonly",
  document: "readonly",
  navigator: "readonly",
  location: "readonly",
  history: "readonly",
  localStorage: "readonly",
  sessionStorage: "readonly",
  fetch: "readonly",
  XMLHttpRequest: "readonly",
} as const;

export const commonjsGlobals = {
  exports: "writable",
  module: "readonly",
  require: "readonly",
} as const;

export const jestGlobals = {
  afterAll: "readonly",
  afterEach: "readonly",
  beforeAll: "readonly",
  beforeEach: "readonly",
  describe: "readonly",
  expect: "readonly",
  it: "readonly",
  jest: "readonly",
  test: "readonly",
} as const;

export const es6Globals = {
  Promise: "readonly",
  Map: "readonly",
  Set: "readonly",
  WeakMap: "readonly",
  WeakSet: "readonly",
  Symbol: "readonly",
  Proxy: "readonly",
  Reflect: "readonly",
  ArrayBuffer: "readonly",
  DataView: "readonly",
  Int8Array: "readonly",
  Uint8Array: "readonly",
  Uint8ClampedArray: "readonly",
  Int16Array: "readonly",
  Uint16Array: "readonly",
  Int32Array: "readonly",
  Uint32Array: "readonly",
  Float32Array: "readonly",
  Float64Array: "readonly",
} as const;

export const es2020Globals = {
  globalThis: "readonly",
  BigInt: "readonly",
  BigInt64Array: "readonly",
  BigUint64Array: "readonly",
} as const;

export const disabledGlobals = {
  global: "off",
  debugger: "off",
} as const;
