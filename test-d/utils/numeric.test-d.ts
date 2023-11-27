import { expectAssignable, expectNotAssignable } from "tsd";
import { Digit } from "../../source/utils/numeric.js";

// Digit

expectNotAssignable<Digit>(" ");

expectAssignable<Digit>("1");

expectNotAssignable<Digit>("1.23");
