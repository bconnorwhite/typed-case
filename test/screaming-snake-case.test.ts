import { test, expect } from "@jest/globals";
import { toConstantCase } from "../source/constant-case.js";

test("toSnakeCase", () => {
  expect(toConstantCase("")).toEqual("");
  expect(toConstantCase("helloWorld")).toEqual("HELLO_WORLD");
  expect(toConstantCase("helloWORLD")).toEqual("HELLO_WORLD");
  expect(toConstantCase("helloWORLDLower")).toEqual("HELLO_WORLD_LOWER");
  expect(toConstantCase("hello WORLD Lower")).toEqual("HELLO_WORLD_LOWER");
  expect(toConstantCase("hello-world")).toEqual("HELLO_WORLD");
  expect(toConstantCase("--hello the_world")).toEqual("HELLO_THE_WORLD");
  expect(toConstantCase("lifeIs42")).toEqual("LIFE_IS_42");
});
