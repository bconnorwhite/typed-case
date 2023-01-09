import { test, expect, describe } from "@jest/globals";
import { toPascalCase } from "../source/pascal-case.js";

describe("toPascalCase", () => {
  test("default", () => {
    expect(toPascalCase("")).toEqual("");
    expect(toPascalCase("helloWorld")).toEqual("HelloWorld");
    expect(toPascalCase("helloWORLD")).toEqual("HelloWORLD");
    expect(toPascalCase("helloWORLDLower")).toEqual("HelloWORLDLower");
    expect(toPascalCase("hello WORLD Lower")).toEqual("HelloWORLDLower");
    expect(toPascalCase("hello-world")).toEqual("HelloWorld");
    expect(toPascalCase("--hello the_world")).toEqual("HelloTheWorld");
    expect(toPascalCase("lifeIs42")).toEqual("LifeIs42");
  });

  test("preserve consecutive uppercase", () => {
    expect(toPascalCase("", { preserveConsecutiveUppercase: true })).toEqual("");
    expect(toPascalCase("helloWorld", { preserveConsecutiveUppercase: true })).toEqual("HelloWorld");
    expect(toPascalCase("helloWORLD", { preserveConsecutiveUppercase: true })).toEqual("HelloWORLD");
    expect(toPascalCase("helloWORLDLower", { preserveConsecutiveUppercase: true })).toEqual("HelloWORLDLower");
    expect(toPascalCase("hello WORLD Lower", { preserveConsecutiveUppercase: true })).toEqual("HelloWORLDLower");
    expect(toPascalCase("hello-world", { preserveConsecutiveUppercase: true })).toEqual("HelloWorld");
    expect(toPascalCase("--hello the_world", { preserveConsecutiveUppercase: true })).toEqual("HelloTheWorld");
    expect(toPascalCase("lifeIs42", { preserveConsecutiveUppercase: true })).toEqual("LifeIs42");
  });

  test("no preserve consecutive uppercase", () => {
    expect(toPascalCase("", { preserveConsecutiveUppercase: false })).toEqual("");
    expect(toPascalCase("helloWorld", { preserveConsecutiveUppercase: false })).toEqual("HelloWorld");
    expect(toPascalCase("helloWORLD", { preserveConsecutiveUppercase: false })).toEqual("HelloWorld");
    expect(toPascalCase("helloWORLDLower", { preserveConsecutiveUppercase: false })).toEqual("HelloWorldLower");
    expect(toPascalCase("hello World Lower", { preserveConsecutiveUppercase: false })).toEqual("HelloWorldLower");
    expect(toPascalCase("hello-world", { preserveConsecutiveUppercase: false })).toEqual("HelloWorld");
    expect(toPascalCase("--hello the_world", { preserveConsecutiveUppercase: false })).toEqual("HelloTheWorld");
    expect(toPascalCase("lifeIs42", { preserveConsecutiveUppercase: false })).toEqual("LifeIs42");
  });
});



