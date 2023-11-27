import { expectAssignable, expectNotAssignable } from "tsd";
import { LowerCaseLetter, UpperCaseLetter } from "../../source/utils/letter.js";

// UpperCaseLetter

expectAssignable<UpperCaseLetter>("A");
expectNotAssignable<UpperCaseLetter>("a");

// LowerCaseLetter

expectAssignable<LowerCaseLetter>("a");
expectNotAssignable<LowerCaseLetter>("A");
