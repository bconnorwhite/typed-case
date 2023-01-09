import { toPascalCase, PascalCase, PascalCaseOptions } from "./pascal-case.js";
import { toDelimiterCase, DelimiterCase } from "./delimiter-case.js";

export type TitleCaseOptions = PascalCaseOptions;

/**
 * Convert a string type to Title Case.
 * @example
 * ```ts
 * type TitleCaseString = TitleCase<"hello world">; // "Hello World"
 * ```
 */
export type TitleCase<T extends string, O extends TitleCaseOptions | undefined = undefined> = DelimiterCase<PascalCase<T, O>, "-">;

/**
 * Convert a string to Title Case.
 * @example
 * ```ts
 * const titleCaseString = toTitleCase("hello world"); // "Hello World"
 * ```
 */
export function toTitleCase<T extends string, O extends TitleCaseOptions>(string: T, options?: O): TitleCase<T, O> {
  return toDelimiterCase(toPascalCase(string, options), " ") as TitleCase<T, O>;
}
