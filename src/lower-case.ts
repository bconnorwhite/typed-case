
/**
 * Convert a string type to lowercase.
 * @example
 * ```ts
 * type LowerCaseString = LowerCase<"Hello World">; // "hello world"
 * ```
 */
export type LowerCase<T extends string> = Lowercase<T>;

/**
 * Convert a string to lowercase.
 * @example
 * ```ts
 * const lowerCaseString = toLowerCase("Hello World"); // "hello world"
 * ```
 */
export function toLowerCase<T extends string>(string: T): LowerCase<T> {
  return string.toLowerCase() as LowerCase<T>;
}

export type LowerCaseAll<T extends string[]> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends string[]
      ? [LowerCase<First>, ...LowerCaseAll<Rest>]
      : never
    : never
  : [];

export function toLowerCaseAll<T extends string[]>(strings: T): LowerCase<T[number]>[] {
  return strings.map((string) => toLowerCase(string));
}
