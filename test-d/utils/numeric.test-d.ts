import { expectNotType, expectType } from "tsd";
import { Digit } from "../../source/utils/numeric.js";

// Digit

expectNotType<Digit>(" ");

expectType<Digit>("1");

expectNotType<Digit>("1.23");
