import { IsLowerCase, IsUpperCase } from "./letter.js";
import { IsDigit } from "./numeric.js";
import { WordSeparators } from "./word-separators.js";

type SkipEmptyWord<Word extends string> = Word extends "" ? [] : [Word];

type RemoveLastCharacter<Sentence extends string, Character extends string> = Sentence extends `${infer LeftSide}${Character}`
  ? SkipEmptyWord<LeftSide>
  : never;

export type SplitWords<
  Sentence extends string,
  LastCharacter extends string = "",
  CurrentWord extends string = "",
> = Sentence extends `${infer FirstCharacter}${infer RemainingCharacters}`
  ? FirstCharacter extends WordSeparators
    // Skip word separator
    ? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, "">]
    : LastCharacter extends ""
      // Fist char of word
      ? SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>
      // Case change: non-numeric to numeric, push word
      : [false, true] extends [IsDigit<LastCharacter>, IsDigit<FirstCharacter>]
        ? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
        // Case change: numeric to non-numeric, push word
        : [true, false] extends [IsDigit<LastCharacter>, IsDigit<FirstCharacter>]
          ? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
          // No case change: concat word
          : [true, true] extends [IsDigit<LastCharacter>, IsDigit<FirstCharacter>]
            ? SplitWords<RemainingCharacters, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
          // Case change: lower to upper, push word
            : [true, true] extends [IsLowerCase<LastCharacter>, IsUpperCase<FirstCharacter>]
              ? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
            // Case change: upper to lower, brings back the last character, push word
              : [true, true] extends [IsUpperCase<LastCharacter>, IsLowerCase<FirstCharacter>]
                ? [...RemoveLastCharacter<CurrentWord, LastCharacter>, ...SplitWords<RemainingCharacters, FirstCharacter, `${LastCharacter}${FirstCharacter}`>]
              // No case change: concat word
                : SplitWords<RemainingCharacters, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
  : [...SkipEmptyWord<CurrentWord>];

/**
 * Split a string into words.
 * Words are separated by spaces, underscores, dashes, or changes in casing.
 */
export function splitWords<T extends string>(string: T): SplitWords<T> {
  return string.replace(/([_\-./])/g, " ")
    .replace(/([\d])([^\d\s])/g, "$1 $2") // Insert space between digit and non-digit
    .replace(/([^\d\s])([\d])/g, "$1 $2") // Insert space between non-digit and digit
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lower and upper
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Insert space before last upper
    .trim()
    .split(/\s+/g) as SplitWords<T>;
}
