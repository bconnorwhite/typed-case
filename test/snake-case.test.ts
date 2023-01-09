import { test, expect } from "@jest/globals";
import { toSnakeCase } from "../source/snake-case.js";

test("toSnakeCase", () => {
  expect(toSnakeCase("")).toEqual("");
  expect(toSnakeCase("helloWorld")).toEqual("hello_world");
  expect(toSnakeCase("helloWORLD")).toEqual("hello_world");
  expect(toSnakeCase("helloWORLDLower")).toEqual("hello_world_lower");
  expect(toSnakeCase("hello WORLD Lower")).toEqual("hello_world_lower");
  expect(toSnakeCase("hello-world")).toEqual("hello_world");
  expect(toSnakeCase("--hello the_world")).toEqual("hello_the_world");
  expect(toSnakeCase("lifeIs42")).toEqual("life_is_42");
});
