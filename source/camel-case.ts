import { SplitWords, JoinWords, splitWords, joinWords } from "./utils/index.js";
import { LowerCase, toLowerCase, LowerCaseAll } from "./lower-case.js";
import { CapitalizeAll, capitalize } from "./capitalize.js";

export type CamelCaseOptions = {
  /**
   * Whether to preserved consecutive uppercase letters.
   * Default: `true`
   */
  preserveConsecutiveUppercase?: boolean;
};

/**
 * Convert a string type to camelCase.
 * @example
 * ```ts
 * type CamelCaseString = CamelCase<"hello world">; // "helloWorld"
 * ```
 */
export type CamelCase<T extends string, O extends CamelCaseOptions | undefined = undefined> = SplitWords<T> extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends string[]
      ? O extends { preserveConsecutiveUppercase: false }
        ? JoinWords<[LowerCase<First>, ...CapitalizeAll<LowerCaseAll<Rest>>]>
        : JoinWords<[LowerCase<First>, ...CapitalizeAll<Rest>]>
      : T
    : never
  : T;

/**
 * Convert a string to camelCase.
 * @example
 * ```ts
 * const camelCaseString = toCamelCase("hello world"); // "helloWorld"
 * ```
 */
export function toCamelCase<T extends string, O extends CamelCaseOptions>(string: T, options?: O): CamelCase<T> {
  const words = splitWords(string).map((segment, index) => {
    const base = options?.preserveConsecutiveUppercase === false ? toLowerCase(segment) : segment;
    return index === 0 ? toLowerCase(base) : capitalize(base);
  });
  return joinWords(words) as CamelCase<T>;
}
