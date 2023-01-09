
export type JoinWords<T extends string[], D extends string | undefined = ""> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends string[]
      ? Rest extends []
        ? First
        : `${First}${D extends undefined ? "" : D}${JoinWords<Rest, D>}`
      : never
    : never
  : "";

export function joinWords<T extends string[], D extends string = "">(words: T): JoinWords<T, D>;
export function joinWords<T extends string[], D extends string>(words: T, delimiter: D): JoinWords<T, D>;
export function joinWords<T extends string[], D extends string | undefined>(words: T, delimiter?: D): JoinWords<T, D> {
  return words.join(delimiter ?? "") as JoinWords<T, D>;
}

