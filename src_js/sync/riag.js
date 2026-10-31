/**
 * @file riag.js is the internal wrapper for the WebAssembly module.
 */
const riag_wasm = require("../riag/riag_wasm.js");

class riag {
  constructor() {
    this._riag = null;
  }

  async init() {
    this._riag = await riag_wasm();
  }

  checkInit() {
    if (!this._riag) {
      throw new Error("The WebAssembly module is not initialized.");
    }
  }

  getVersion() {
    this.checkInit();
    return this._riag.getVersion();
  }

  getStorageVersion() {
    this.checkInit();
    return this._riag.getStorageVersion();
  }

  getFS() {
    this.checkInit();
    return this._riag.FS;
  }

  getWasmMemory() {
    this.checkInit();
    return this._riag.wasmMemory;
  }

  /**
   * Return the raw Emscripten module object. Used internally by the worker to
   * call low-level WasmFS helpers (e.g. _wasmfs_create_opfs_backend).
   */
  getModule() {
    this.checkInit();
    return this._riag;
  }
}

const riagInstance = new riag();
module.exports = riagInstance;
