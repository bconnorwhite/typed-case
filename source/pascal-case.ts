import { toCamelCase, CamelCase, CamelCaseOptions } from "./camel-case.js";
import { capitalize } from "./capitalize.js";

export type PascalCaseOptions = CamelCaseOptions;

/**
 * Convert a string type to PascalCase.
 * @example
 * ```ts
 * type PascalCaseString = PascalCase<"hello world">; // "HelloWorld"
 * ```
 */
export type PascalCase<T extends string, Options extends PascalCaseOptions | undefined = undefined> = Capitalize<CamelCase<T, Options>>;

/**
 * Convert a string to PascalCase.
 * @example
 * ```ts
 * const pascalCaseString = toPascalCase("hello world"); // "HelloWorld"
 * ```
 */
export function toPascalCase<T extends string, O extends PascalCaseOptions>(string: T, options?: O): PascalCase<T, O> {
  return capitalize(toCamelCase(string, options)) as PascalCase<T, O>;
}
