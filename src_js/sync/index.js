/**
 * @file index.js is the root file for the synchronous version of RiaG
 * WebAssembly module. It exports the module's public interface.
 */
"use strict";

const RiaGWasm = require("./riag.js");
const Database = require("./database.js");
const Connection = require("./connection.js");
const PreparedStatement = require("./prepared_statement.js");
const QueryResult = require("./query_result.js");

/**
 * The synchronous version of RiaG WebAssembly module.
 * @module riag-wasm
 */
module.exports = {
  /**
   * Initialize the RiaG WebAssembly module.
   * @memberof module:riag-wasm
   * @returns {Promise<void>} a promise that resolves when the module is 
   * initialized. The promise is rejected if the module fails to initialize.
   */
  init: () => {
    return RiaGWasm.init();
  },

  /**
   * Get the version of the RiaG WebAssembly module.
   * @memberof module:riag-wasm
   * @returns {String} the version of the RiaG WebAssembly module.
   */
  getVersion: () => {
    return RiaGWasm.getVersion();
  },

  /**
   * Get the storage version of the RiaG WebAssembly module.
   * @memberof module:riag-wasm
   * @returns {BigInt} the storage version of the RiaG WebAssembly module.
   */
  getStorageVersion: () => {
    return RiaGWasm.getStorageVersion();
  },
  
  /**
   * Get the standard emscripten filesystem module (FS). Please refer to the 
   * emscripten documentation for more information.
   * @memberof module:riag-wasm
   * @returns {Object} the standard emscripten filesystem module (FS).
   */
  getFS: () => {
    return RiaGWasm.getFS();
  },

  /**
   * Get the WebAssembly memory. Please refer to the emscripten documentation 
   * for more information.
   * @memberof module:riag-wasm
   * @returns {Object} the WebAssembly memory object.
   */
  getWasmMemory: () => {
    return RiaGWasm.getWasmMemory();
  },

  /**
   * Get the raw Emscripten module object. Used internally to access low-level
   * WasmFS APIs such as _wasmfs_create_opfs_backend.
   * @memberof module:riag-wasm
   * @returns {Object} the Emscripten module object.
   */
  getModule: () => {
    return RiaGWasm.getModule();
  },

  Database,
  Connection,
  PreparedStatement,
  QueryResult,
};
