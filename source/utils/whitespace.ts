
export type Whitespace = typeof whitespace[number];

export const whitespace = [" ", "\t", "\n", "\r", "\f", "\v"] as const;

/**
Returns a boolean for whether a string is whitespace.
*/
export type IsWhitespace<T extends string> = T extends Whitespace
  ? true
  : T extends `${Whitespace}${infer Rest}`
    ? IsWhitespace<Rest>
    : false;
