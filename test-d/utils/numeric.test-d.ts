import { expectType, expectNotType } from "tsd";
import { IsNumeric, Digit } from "../../source/utils/numeric.js";

// Digit

expectNotType<Digit>(" ");

expectType<Digit>("1");

expectNotType<Digit>("1.23");

// Numeric

expectType<IsNumeric<" ">>(false);

expectType<IsNumeric<"1">>(true);

expectType<IsNumeric<"1.23">>(true);
