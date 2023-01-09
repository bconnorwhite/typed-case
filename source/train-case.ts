import { toPascalCase, PascalCase, PascalCaseOptions } from "./pascal-case.js";
import { toDelimiterCase, DelimiterCase } from "./delimiter-case.js";

export type TrainCaseOptions = PascalCaseOptions;

/**
 * Convert a string type to Train-Case.
 * @example
 * ```ts
 * type TrainCaseString = TrainCase<"hello world">; // "Hello-World"
 * ```
 */
export type TrainCase<T extends string, O extends TrainCaseOptions | undefined = undefined> = DelimiterCase<PascalCase<T, O>, "-">;

/**
 * Convert a string to Train-Case.
 * @example
 * ```ts
 * const trainCaseString = toTrainCase("hello world"); // "Hello-World"
 * ```
 */
export function toTrainCase<T extends string, O extends TrainCaseOptions>(string: T, options?: O): TrainCase<T, O> {
  return toDelimiterCase(toPascalCase(string, options), "-") as TrainCase<T, O>;
}
