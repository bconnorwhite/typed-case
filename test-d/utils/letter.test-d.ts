import { expectAssignable, expectNotAssignable } from "tsd";
import type { LowerCaseLetter, UpperCaseLetter } from "../../src/utils/letter.js";

// UpperCaseLetter

expectAssignable<UpperCaseLetter>("A");
expectNotAssignable<UpperCaseLetter>("a");

// LowerCaseLetter

expectAssignable<LowerCaseLetter>("a");
expectNotAssignable<LowerCaseLetter>("A");
