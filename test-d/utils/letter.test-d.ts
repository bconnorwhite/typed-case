import { expectType, expectNotType } from "tsd";
import { UpperCaseLetter, LowerCaseLetter } from "../../source/utils/letter.js";

// UpperCaseLetter

expectType<UpperCaseLetter>("A");
expectNotType<UpperCaseLetter>("a");

// LowerCaseLetter

expectType<LowerCaseLetter>("a");
expectNotType<LowerCaseLetter>("A");
