import { describe, expect, test } from "vitest";
import {
  capitalize,
  uncapitalize,
  toCamelCase,
  toConstantCase,
  toKebabCase,
  toLowerCase,
  toPascalCase,
  toSnakeCase,
  toTitleCase,
  toTrainCase,
  toUpperCase
} from "../src/index.js";
import { capitalizeAll } from "../src/capitalize.js";
import { toLowerCaseAll } from "../src/lower-case.js";
import { uncapitalizeAll } from "../src/uncapitalize.js";
import { toUpperCaseAll } from "../src/upper-case.js";
import { whitespace } from "../src/utils/whitespace.js";
import "../src/utils/word-separators.js";

describe("helper functions", () => {
  test("barrel exports public helpers", () => {
    expect(capitalize("hello world")).toEqual("Hello world");
    expect(uncapitalize("Hello world")).toEqual("hello world");
    expect(toCamelCase("hello world")).toEqual("helloWorld");
    expect(toPascalCase("hello world")).toEqual("HelloWorld");
    expect(toTrainCase("hello world")).toEqual("Hello-World");
    expect(toTitleCase("hello world")).toEqual("Hello World");
    expect(toKebabCase("hello world")).toEqual("hello-world");
    expect(toSnakeCase("hello world")).toEqual("hello_world");
    expect(toConstantCase("hello world")).toEqual("HELLO_WORLD");
    expect(toLowerCase("Hello World")).toEqual("hello world");
    expect(toUpperCase("hello world")).toEqual("HELLO WORLD");
  });

  test("array helpers transform each item and preserve empties", () => {
    expect(capitalizeAll(["hello", "", "world"])).toEqual(["Hello", "", "World"]);
    expect(uncapitalizeAll(["Hello", "", "World"])).toEqual(["hello", "", "world"]);
    expect(toLowerCaseAll(["Hello", "", "WORLD"])).toEqual(["hello", "", "world"]);
    expect(toUpperCaseAll(["hello", "", "World"])).toEqual(["HELLO", "", "WORLD"]);
  });

  test("whitespace includes common separators used by type utilities", () => {
    expect(whitespace).toContain("\u0009");
    expect(whitespace).toContain("\u0020");
    expect(whitespace).toContain("\u3000");
    expect(whitespace).toContain("\uFEFF");
  });
});
