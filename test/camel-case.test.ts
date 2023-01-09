import { test, expect, describe } from "@jest/globals";
import { toCamelCase } from "../source/camel-case.js";

describe("toCamelCase", () => {
  test("default", () => {
    expect(toCamelCase("")).toEqual("");
    expect(toCamelCase("helloWorld")).toEqual("helloWorld");
    expect(toCamelCase("helloWORLD")).toEqual("helloWORLD");
    expect(toCamelCase("helloWORLDLower")).toEqual("helloWORLDLower");
    expect(toCamelCase("hello WORLD Lower")).toEqual("helloWORLDLower");
    expect(toCamelCase("hello-world")).toEqual("helloWorld");
    expect(toCamelCase("--hello the_world")).toEqual("helloTheWorld");
    expect(toCamelCase("lifeIs42")).toEqual("lifeIs42");
  });

  test("preserve consecutive uppercase", () => {
    expect(toCamelCase("", { preserveConsecutiveUppercase: true })).toEqual("");
    expect(toCamelCase("helloWorld", { preserveConsecutiveUppercase: true })).toEqual("helloWorld");
    expect(toCamelCase("helloWORLD", { preserveConsecutiveUppercase: true })).toEqual("helloWORLD");
    expect(toCamelCase("helloWORLDLower", { preserveConsecutiveUppercase: true })).toEqual("helloWORLDLower");
    expect(toCamelCase("hello WORLD Lower", { preserveConsecutiveUppercase: true })).toEqual("helloWORLDLower");
    expect(toCamelCase("hello-world", { preserveConsecutiveUppercase: true })).toEqual("helloWorld");
    expect(toCamelCase("--hello the_world", { preserveConsecutiveUppercase: true })).toEqual("helloTheWorld");
    expect(toCamelCase("lifeIs42", { preserveConsecutiveUppercase: true })).toEqual("lifeIs42");
  });

  test("no preserve consecutive uppercase", () => {
    expect(toCamelCase("", { preserveConsecutiveUppercase: false })).toEqual("");
    expect(toCamelCase("helloWorld", { preserveConsecutiveUppercase: false })).toEqual("helloWorld");
    expect(toCamelCase("helloWORLD", { preserveConsecutiveUppercase: false })).toEqual("helloWorld");
    expect(toCamelCase("helloWORLDLower", { preserveConsecutiveUppercase: false })).toEqual("helloWorldLower");
    expect(toCamelCase("hello World Lower", { preserveConsecutiveUppercase: false })).toEqual("helloWorldLower");
    expect(toCamelCase("hello-world", { preserveConsecutiveUppercase: false })).toEqual("helloWorld");
    expect(toCamelCase("--hello the_world", { preserveConsecutiveUppercase: false })).toEqual("helloTheWorld");
    expect(toCamelCase("lifeIs42", { preserveConsecutiveUppercase: false })).toEqual("lifeIs42");
  });
});



