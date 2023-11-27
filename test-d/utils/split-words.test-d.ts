import { expectType } from "tsd";
import { SplitWords } from "../../source/utils/split-words.js";

expectType<SplitWords<"">>([]);

expectType<SplitWords<"this">>(["this"]);

expectType<SplitWords<"this is a test">>(["this", "is", "a", "test"]);

expectType<SplitWords<"this-is-a-test">>(["this", "is", "a", "test"]);

expectType<SplitWords<"this-is_a test">>(["this", "is", "a", "test"]);

expectType<SplitWords<"this is a test">>(["this", "is", "a", "test"]);

expectType<SplitWords<"this IS a Test">>(["this", "IS", "a", "Test"]);

expectType<SplitWords<"thisIsATest">>(["this", "Is", "A", "Test"]);

expectType<SplitWords<"thisIsTEST">>(["this", "Is", "TEST"]);

expectType<SplitWords<"--thisIsTEST">>(["this", "Is", "TEST"]);

expectType<SplitWords<"--thisIsTEST42">>(["this", "Is", "TEST", "42"]);
