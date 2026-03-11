import { test, expect } from "vitest";
import { toUpperCase } from "../src/upper-case.js";

test("toUpperCase", () => {
  expect(toUpperCase("helloWorld")).toEqual("HELLOWORLD");
  expect(toUpperCase("helloWORLD")).toEqual("HELLOWORLD");
  expect(toUpperCase("helloWORLDLower")).toEqual("HELLOWORLDLOWER");
  expect(toUpperCase("hello-world")).toEqual("HELLO-WORLD");
  expect(toUpperCase("--hello the_world")).toEqual("--HELLO THE_WORLD");
  expect(toUpperCase("lifeIs42")).toEqual("LIFEIS42");
});
