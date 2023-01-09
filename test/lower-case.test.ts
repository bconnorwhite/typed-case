import { test, expect } from "@jest/globals";
import { toLowerCase } from "../source/lower-case.js";

test("toLowerCase", () => {
  expect(toLowerCase("helloWorld")).toEqual("helloworld");
  expect(toLowerCase("helloWORLD")).toEqual("helloworld");
  expect(toLowerCase("helloWORLDLower")).toEqual("helloworldlower");
  expect(toLowerCase("hello-world")).toEqual("hello-world");
  expect(toLowerCase("--hello the_world")).toEqual("--hello the_world");
  expect(toLowerCase("lifeIs42")).toEqual("lifeis42");
});
