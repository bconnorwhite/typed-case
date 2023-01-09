import { SplitWords, JoinWords, splitWords, joinWords } from "./utils/index.js";
import { WordSeparators } from "./utils/word-separators.js";

export type DelimiterCase<T extends string, D extends WordSeparators> = SplitWords<T> extends string[]
  ? JoinWords<SplitWords<T>, D>
  : never;

export function toDelimiterCase<T extends string, D extends WordSeparators>(string: T, delimiter: D): DelimiterCase<T, D> {
  return joinWords(splitWords(string), delimiter) as DelimiterCase<T, D>;
}
