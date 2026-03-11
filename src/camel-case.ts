import type { SplitWords, JoinWords } from "./utils/index.js";
import { splitWords, joinWords } from "./utils/index.js";
import type { LowerCase, LowerCaseAll } from "./lower-case.js";
import { toLowerCase } from "./lower-case.js";
import type { CapitalizeAll } from "./capitalize.js";
import { capitalize } from "./capitalize.js";

export type CamelCaseOptions = {
  /**
   * Whether to preserved consecutive uppercase letters.
   * Default: `true`
   */
  preserveConsecutiveUppercase?: boolean;
};

type PreserveConsecutiveUppercase<O extends CamelCaseOptions | undefined> = O extends undefined
  ? true
  : O extends { preserveConsecutiveUppercase?: infer PreserveUppercase }
    ? PreserveUppercase extends false
      ? false
      : true
    : true;

/**
 * Convert a string type to camelCase.
 * @example
 * ```ts
 * type CamelCaseString = CamelCase<"hello world">; // "helloWorld"
 * ```
 */
export type CamelCase<T extends string, O extends CamelCaseOptions | undefined = undefined> = T extends string
  ? SplitWords<T> extends [infer First, ...infer Rest]
    ? First extends string
      ? Rest extends string[]
        ? PreserveConsecutiveUppercase<O> extends false
          ? JoinWords<[LowerCase<First>, ...CapitalizeAll<LowerCaseAll<Rest>>]>
          : JoinWords<[LowerCase<First>, ...CapitalizeAll<Rest>]>
        : T
      : never
    : T
  : never;

/**
 * Convert a string to camelCase.
 * @example
 * ```ts
 * const camelCaseString = toCamelCase("hello world"); // "helloWorld"
 * ```
 */
export function toCamelCase<T extends string, O extends CamelCaseOptions | undefined = undefined>(
  string: T,
  options?: O
): CamelCase<T, O> {
  const words = splitWords(string).map((segment, index) => {
    const base = options?.preserveConsecutiveUppercase === false ? toLowerCase(segment) : segment;
    return index === 0 ? toLowerCase(base) : capitalize(base);
  });
  return joinWords(words) as CamelCase<T, O>;
}
