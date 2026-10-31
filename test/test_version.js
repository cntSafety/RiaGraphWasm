const { assert } = require("chai");

describe("Get version", function () {
  it("should get the version of the library", async function () {
    const version = await riag.getVersion();
    assert.isString(version);
    assert.notEqual(version, "");
  });

  it("should get the storage version of the library", async function () {
    const storageVersion = await riag.getStorageVersion();
    assert.isTrue(storageVersion > 0);
  });
});
