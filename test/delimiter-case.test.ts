import { test, expect } from "@jest/globals";
import { toDelimiterCase } from "../source/delimiter-case.js";

test("toDelimiterCase", () => {
  expect(toDelimiterCase("", ".")).toEqual("");
  expect(toDelimiterCase("helloWorld", ".")).toEqual("hello.World");
  expect(toDelimiterCase("helloWORLD", ".")).toEqual("hello.WORLD");
  expect(toDelimiterCase("helloWORLDLower", ".")).toEqual("hello.WORLD.Lower");
  expect(toDelimiterCase("hello WORLD Lower", ".")).toEqual("hello.WORLD.Lower");
  expect(toDelimiterCase("hello-world", ".")).toEqual("hello.world");
  expect(toDelimiterCase("--hello the_world", ".")).toEqual("hello.the.world");
  expect(toDelimiterCase("lifeIs42", ".")).toEqual("life.Is.42");
});
