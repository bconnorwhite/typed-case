import { expectAssignable, expectNotAssignable } from "tsd";
import type { Digit } from "../../src/utils/numeric.js";

// Digit

expectNotAssignable<Digit>(" ");

expectAssignable<Digit>("1");

expectNotAssignable<Digit>("1.23");
