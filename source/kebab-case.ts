import { toDelimiterCase, DelimiterCase } from "./delimiter-case.js";
import { toLowerCase, LowerCase } from "./lower-case.js";

/**
 * Convert a string type to kebab-case.
 * @example
 * ```ts
 * type KebabCaseString = KebabCase<"hello world">; // "hello-world"
 * ```
 */
export type KebabCase<T extends string> = LowerCase<DelimiterCase<T, "-">>;

/**
 * Convert a string to kebab-case.
 * @example
 * ```ts
 * const kebabCaseString = toKebabCase("hello world"); // "hello-world"
 * ```
 */
export function toKebabCase<T extends string>(string: T): KebabCase<T> {
  return toLowerCase(toDelimiterCase(string, "-"));
}
