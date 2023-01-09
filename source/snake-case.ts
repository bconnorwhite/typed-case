import { toDelimiterCase, DelimiterCase } from "./delimiter-case.js";
import { toLowerCase, LowerCase } from "./lower-case.js";

/**
 * Convert a string type to snake_case.
 * @example
 * ```ts
 * type SnakeCaseString = SnakeCase<"hello world">; // "hello_world"
 * ```
 */
export type SnakeCase<T extends string> = LowerCase<DelimiterCase<T, "_">>;

/**
 * Convert a string to snake_case.
 * @example
 * ```ts
 * const snakeCaseString = toSnakeCase("hello world"); // "hello_world"
 * ```
 */
export function toSnakeCase<T extends string>(string: T): SnakeCase<T> {
  return toLowerCase(toDelimiterCase(string, "_"));
}
