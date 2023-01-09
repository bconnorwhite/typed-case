import { test, expect } from "@jest/globals";
import { splitWords } from "../../source/utils/split-words.js";

test("splitWords", () => {
  expect(splitWords("helloWorld")).toEqual(["hello", "World"]);
  expect(splitWords("helloWORLD")).toEqual(["hello", "WORLD"]);
  expect(splitWords("helloWORLDLower")).toEqual(["hello", "WORLD", "Lower"]);
  expect(splitWords("hello WORLD Lower")).toEqual(["hello", "WORLD", "Lower"]);
  expect(splitWords("hello-world")).toEqual(["hello", "world"]);
  expect(splitWords("--hello the_world")).toEqual(["hello", "the", "world"]);
  expect(splitWords("lifeIs42")).toEqual(["life", "Is", "42"]);
});
