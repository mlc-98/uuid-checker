import { describe, expect, test } from "bun:test";
import { isUUID, nilRegex, v1, v2, v3, v4, v5, v7 } from "./index.js";

describe("Tests for UUID V1.", () => {
  test("Valid V1 UUID", () => {
    const expected = true;
    const testData = "e9af97e2-0531-11f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v1] });
    expect(result).toBe(expected);
  });

  test("Valid UUID, invalid V1.", () => {
    const expected = false;
    const testData = "e9af97e2-0531-41f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v1] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID, correct digit", () => {
    const expected = false;
    const testData = "e9af9$e2-0531-11f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v1] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID (invalid length)", () => {
    const expected = false;
    const testData = "e9af97e2-0531-11f0-9b9c-8effa1af4080b";
    const result = isUUID(testData, { validators: [v1] });
    expect(result).toBe(expected);
  });

  test("Valid V1 UUID, no validators passed", () => {
    const expected = true;
    const testData = "e9af97e2-0531-11f0-9b9c-8effaaf4080b";
    const result = isUUID(testData);
    expect(result).toBe(expected);
  });
});

describe("Tests for UUID V2.", () => {
  test("Valid V2 UUID", () => {
    const expected = true;
    const testData = "e9af97e2-0531-21f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v2] });
    expect(result).toBe(expected);
  });

  test("Valid UUID, invalid V2.", () => {
    const expected = false;
    const testData = "e9af97e2-0531-41f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v2] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID, correct digit", () => {
    const expected = false;
    const testData = "e9af9$e2-0531-21f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v2] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID (invalid length)", () => {
    const expected = false;
    const testData = "e9af97e2-0531-21f0-9b9c-8effa1af4080b";
    const result = isUUID(testData, { validators: [v2] });
    expect(result).toBe(expected);
  });

  test("Valid V2 UUID, no validators passed", () => {
    const expected = true;
    const testData = "e9af97e2-0531-21f0-9b9c-8effaaf4080b";
    const result = isUUID(testData);
    expect(result).toBe(expected);
  });
});

describe("Tests for UUID V3.", () => {
  test("Valid V3 UUID", () => {
    const expected = true;
    const testData = "e9af97e2-0531-31f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v3] });
    expect(result).toBe(expected);
  });

  test("Valid UUID, invalid V3.", () => {
    const expected = false;
    const testData = "e9af97e2-0531-41f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v3] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID, correct digit", () => {
    const expected = false;
    const testData = "e9af9$e2-0531-31f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v3] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID (invalid length)", () => {
    const expected = false;
    const testData = "e9af97e2-0531-31f0-9b9c-8effa1af4080b";
    const result = isUUID(testData, { validators: [v3] });
    expect(result).toBe(expected);
  });

  test("Valid V3 UUID, no validators passed", () => {
    const expected = true;
    const testData = "e9af97e2-0531-31f0-9b9c-8effaaf4080b";
    const result = isUUID(testData);
    expect(result).toBe(expected);
  });
});

describe("Tests for UUID V4.", () => {
  test("Valid V4 UUID", () => {
    const expected = true;
    const testData = "e9af97e2-0531-41f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v4] });
    expect(result).toBe(expected);
  });

  test("Valid UUID, invalid V4.", () => {
    const expected = false;
    const testData = "e9af97e2-0531-31f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v4] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID, correct digit", () => {
    const expected = false;
    const testData = "e9af9$e2-0531-41f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v4] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID (invalid length)", () => {
    const expected = false;
    const testData = "e9af97e2-0531-41f0-9b9c-8effa1af4080b";
    const result = isUUID(testData, { validators: [v4] });
    expect(result).toBe(expected);
  });

  test("Valid V4 UUID, no validators passed", () => {
    const expected = true;
    const testData = "e9af97e2-0531-41f0-9b9c-8effaaf4080b";
    const result = isUUID(testData);
    expect(result).toBe(expected);
  });
});

describe("Tests for UUID V5.", () => {
  test("Valid V5 UUID", () => {
    const expected = true;
    const testData = "e9af97e2-0531-51f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v5] });
    expect(result).toBe(expected);
  });

  test("Valid UUID, invalid V5.", () => {
    const expected = false;
    const testData = "e9af97e2-0531-31f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v5] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID, correct digit", () => {
    const expected = false;
    const testData = "e9af9$e2-0531-51f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v5] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID (invalid length)", () => {
    const expected = false;
    const testData = "e9af97e2-0531-51f0-9b9c-8effa1af4080b";
    const result = isUUID(testData, { validators: [v5] });
    expect(result).toBe(expected);
  });

  test("Valid V5 UUID, no validators passed", () => {
    const expected = true;
    const testData = "e9af97e2-0531-51f0-9b9c-8effaaf4080b";
    const result = isUUID(testData);
    expect(result).toBe(expected);
  });
});

describe("Tests for UUID V7.", () => {
  test("Valid V7 UUID", () => {
    const expected = true;
    const testData = "e9af97e2-0531-71f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v7] });
    expect(result).toBe(expected);
  });

  test("Valid UUID, invalid V7.", () => {
    const expected = false;
    const testData = "e9af97e2-0531-31f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v7] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID, correct digit", () => {
    const expected = false;
    const testData = "e9af9$e2-0531-71f0-9b9c-8effaaf4080b";
    const result = isUUID(testData, { validators: [v7] });
    expect(result).toBe(expected);
  });

  test("Invalid UUID (invalid length)", () => {
    const expected = false;
    const testData = "e9af97e2-0531-71f0-9b9c-8effa1af4080b";
    const result = isUUID(testData, { validators: [v7] });
    expect(result).toBe(expected);
  });

  test("Valid V7 UUID, no validators passed", () => {
    const expected = true;
    const testData = "e9af97e2-0531-71f0-9b9c-8effaaf4080b";
    const result = isUUID(testData);
    expect(result).toBe(expected);
  });
});

describe("Tests for nil UUID", () => {
  test("Valid nil UUID", () => {
    const expected = true;
    const testData = "00000000-0000-0000-0000-000000000000";
    const result = isUUID(testData, { validators: [nilRegex] });
    expect(result).toBe(expected);
  });

  test("Invalid nil UUID (invalid character)", () => {
    const expected = false;
    const testData = "00000000-1000-0000-0000-000000000000";
    const result = isUUID(testData, { validators: [nilRegex] });
    expect(result).toBe(expected);
  });

  test("Valid nil UUID, no validators passed.", () => {
    const expected = false;
    const testData = "00000000-0000-0000-0000-000000000000";
    const result = isUUID(testData);
    expect(result).toBe(expected);
  });

  test("Invalid nil UUID (invalid length)", () => {
    const expected = false;
    const testData = "00000000-00000-0000-0000-000000000000";
    const result = isUUID(testData, { validators: [nilRegex] });
    expect(result).toBe(expected);
  });
});

describe("Tests for invalid validators", () => {
  // This test is purposely skipped because it will throw an error.
  test.skip("Invalid custom regex", () => {
    const testData = 'e9af97e2-0531-11f0-9b9c-8effaaf4080b';
    const wrongRegex = /^[0-9]{5}$/i;
    // @ts-expect-error - Intentional type violation for testing
    expect(isUUID(testData, { validators: [wrongRegex]})).toBe(false);
  });
});
