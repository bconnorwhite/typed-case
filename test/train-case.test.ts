import { test, expect, describe } from "@jest/globals";
import { toTrainCase } from "../source/train-case.js";

describe("toTrainCase", () => {
  test("default", () => {
    expect(toTrainCase("")).toEqual("");
    expect(toTrainCase("helloWorld")).toEqual("Hello-World");
    expect(toTrainCase("helloWORLD")).toEqual("Hello-WORLD");
    expect(toTrainCase("helloWORLDLower")).toEqual("Hello-WORLD-Lower");
    expect(toTrainCase("hello WORLD Lower")).toEqual("Hello-WORLD-Lower");
    expect(toTrainCase("hello-world")).toEqual("Hello-World");
    expect(toTrainCase("--hello the_world")).toEqual("Hello-The-World");
    expect(toTrainCase("lifeIs42")).toEqual("Life-Is-42");
  });

  test("preserve consecutive uppercase", () => {
    expect(toTrainCase("", { preserveConsecutiveUppercase: true })).toEqual("");
    expect(toTrainCase("helloWorld", { preserveConsecutiveUppercase: true })).toEqual("Hello-World");
    expect(toTrainCase("helloWORLD", { preserveConsecutiveUppercase: true })).toEqual("Hello-WORLD");
    expect(toTrainCase("helloWORLDLower", { preserveConsecutiveUppercase: true })).toEqual("Hello-WORLD-Lower");
    expect(toTrainCase("hello WORLD Lower", { preserveConsecutiveUppercase: true })).toEqual("Hello-WORLD-Lower");
    expect(toTrainCase("hello-world", { preserveConsecutiveUppercase: true })).toEqual("Hello-World");
    expect(toTrainCase("--hello the_world", { preserveConsecutiveUppercase: true })).toEqual("Hello-The-World");
    expect(toTrainCase("lifeIs42", { preserveConsecutiveUppercase: true })).toEqual("Life-Is-42");
  });

  test("no preserve consecutive uppercase", () => {
    expect(toTrainCase("", { preserveConsecutiveUppercase: false })).toEqual("");
    expect(toTrainCase("helloWorld", { preserveConsecutiveUppercase: false })).toEqual("Hello-World");
    expect(toTrainCase("helloWORLD", { preserveConsecutiveUppercase: false })).toEqual("Hello-World");
    expect(toTrainCase("helloWORLDLower", { preserveConsecutiveUppercase: false })).toEqual("Hello-World-Lower");
    expect(toTrainCase("hello World Lower", { preserveConsecutiveUppercase: false })).toEqual("Hello-World-Lower");
    expect(toTrainCase("hello-world", { preserveConsecutiveUppercase: false })).toEqual("Hello-World");
    expect(toTrainCase("--hello the_world", { preserveConsecutiveUppercase: false })).toEqual("Hello-The-World");
    expect(toTrainCase("lifeIs42", { preserveConsecutiveUppercase: false })).toEqual("Life-Is-42");
  });
});
