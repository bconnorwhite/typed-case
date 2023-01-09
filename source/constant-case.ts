import { toSnakeCase, SnakeCase } from "./snake-case.js";
import { toUpperCase, UpperCase } from "./upper-case.js";

/**
 * Convert a string type to CONSTANT_CASE.
 * @example
 * ```ts
 * type ConstantCaseString = ConstantCase<"hello world">; // "HELLO_WORLD"
 * ```
 */
export type ConstantCase<T extends string> = UpperCase<SnakeCase<T>>;

/**
 * Convert a string to CONSTANT_CASE.
 * @example
 * ```ts
 * const constantCaseString = toConstantCase("hello world"); // "HELLO_WORLD"
 * ```
 */
export function toConstantCase<T extends string>(string: T): ConstantCase<T> {
  return toUpperCase(toSnakeCase(string));
}
