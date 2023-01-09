import { test, expect } from "@jest/globals";
import { toKebabCase } from "../source/kebab-case.js";

test("toKebabCase", () => {
  expect(toKebabCase("")).toEqual("");
  expect(toKebabCase("helloWorld")).toEqual("hello-world");
  expect(toKebabCase("helloWORLD")).toEqual("hello-world");
  expect(toKebabCase("helloWORLDLower")).toEqual("hello-world-lower");
  expect(toKebabCase("hello WORLD Lower")).toEqual("hello-world-lower");
  expect(toKebabCase("hello-world")).toEqual("hello-world");
  expect(toKebabCase("--hello the_world")).toEqual("hello-the-world");
  expect(toKebabCase("lifeIs42")).toEqual("life-is-42");
});
