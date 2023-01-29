
export type Whitespace = typeof whitespace[number];

export const whitespace = [
  "\u0009", // "\t"
  "\u000A", // "\n"
  "\u000B", // "\v"
  "\u000C", // "\f"
  "\u000D", // "\r"
  "\u0020", // " "
  "\u0085", // <-- Does not count as numeric like the others
  "\u00A0",
  "\u1680",
  "\u2000",
  "\u2001",
  "\u2002",
  "\u2003",
  "\u2004",
  "\u2005",
  "\u2006",
  "\u2007",
  "\u2008",
  "\u2009",
  "\u200A",
  "\u2028",
  "\u2029",
  "\u202F",
  "\u205F",
  "\u3000",
  "\uFEFF"
] as const;

/**
Returns a boolean for whether a string is whitespace.
*/
export type IsWhitespace<T extends string> = T extends Whitespace
  ? true
  : T extends `${Whitespace}${infer Rest}`
    ? IsWhitespace<Rest>
    : false;
