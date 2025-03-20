export const v1 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const v2 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const v3 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const v4 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const v5 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const v7 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[7][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i;

export type UuidVersion =
  | typeof v1
  | typeof v2
  | typeof v3
  | typeof v4
  | typeof v5
  | typeof v7
  | typeof nilRegex


/**
 * Check if a given string matches the pattern for a UUID version. If checking for a nil
 * UUID, it's mandatory to include `nilRegex` as a validator; by default, if no validators are
 * provided, the function will check for non-nil UUIDs only.
 * @param { string } input - The string to evaluate
 * @param options - `validators` an array of valid UUID RegEx to validate `input` against.
 * @returns { boolean } - whether `input` matches one of the validators.
 */
export function isUUID(input: string, options?: { validators: UuidVersion[] }) {
  if (options) {
    return options.validators.some((v) => v.test(input));
  } else {
    const validators = [v1, v2, v3, v4, v5, v7];
    return validators.some((v) => v.test(input));
  }
}