import { test, expect, describe } from "@jest/globals";
import { toTitleCase } from "../source/title-case.js";

describe("toTitleCase", () => {
  test("default", () => {
    expect(toTitleCase("")).toEqual("");
    expect(toTitleCase("helloWorld")).toEqual("Hello World");
    expect(toTitleCase("helloWORLD")).toEqual("Hello WORLD");
    expect(toTitleCase("helloWORLDLower")).toEqual("Hello WORLD Lower");
    expect(toTitleCase("hello WORLD Lower")).toEqual("Hello WORLD Lower");
    expect(toTitleCase("hello-world")).toEqual("Hello World");
    expect(toTitleCase("--hello the_world")).toEqual("Hello The World");
    expect(toTitleCase("lifeIs42")).toEqual("Life Is 42");
  });

  test("preserve consecutive uppercase", () => {
    expect(toTitleCase("", { preserveConsecutiveUppercase: true })).toEqual("");
    expect(toTitleCase("helloWorld", { preserveConsecutiveUppercase: true })).toEqual("Hello World");
    expect(toTitleCase("helloWORLD", { preserveConsecutiveUppercase: true })).toEqual("Hello WORLD");
    expect(toTitleCase("helloWORLDLower", { preserveConsecutiveUppercase: true })).toEqual("Hello WORLD Lower");
    expect(toTitleCase("hello WORLD Lower", { preserveConsecutiveUppercase: true })).toEqual("Hello WORLD Lower");
    expect(toTitleCase("hello-world", { preserveConsecutiveUppercase: true })).toEqual("Hello World");
    expect(toTitleCase("--hello the_world", { preserveConsecutiveUppercase: true })).toEqual("Hello The World");
    expect(toTitleCase("lifeIs42", { preserveConsecutiveUppercase: true })).toEqual("Life Is 42");
  });

  test("no preserve consecutive uppercase", () => {
    expect(toTitleCase("", { preserveConsecutiveUppercase: false })).toEqual("");
    expect(toTitleCase("helloWorld", { preserveConsecutiveUppercase: false })).toEqual("Hello World");
    expect(toTitleCase("helloWORLD", { preserveConsecutiveUppercase: false })).toEqual("Hello World");
    expect(toTitleCase("helloWORLDLower", { preserveConsecutiveUppercase: false })).toEqual("Hello World Lower");
    expect(toTitleCase("hello World Lower", { preserveConsecutiveUppercase: false })).toEqual("Hello World Lower");
    expect(toTitleCase("hello-world", { preserveConsecutiveUppercase: false })).toEqual("Hello World");
    expect(toTitleCase("--hello the_world", { preserveConsecutiveUppercase: false })).toEqual("Hello The World");
    expect(toTitleCase("lifeIs42", { preserveConsecutiveUppercase: false })).toEqual("Life Is 42");
  });
});
