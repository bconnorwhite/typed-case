import type {
  CamelCase,
  PascalCase,
  TitleCase,
} from "../src/index.js";

const camelDefault: CamelCase<"hello WORLD"> = "helloWORLD";
const camelTrue: CamelCase<"hello WORLD", { preserveConsecutiveUppercase: true }> = "helloWORLD";
const camelFalse: CamelCase<"hello WORLD", { preserveConsecutiveUppercase: false }> = "helloWorld";

const pascalDefault: PascalCase<"hello WORLD"> = "HelloWORLD";
const pascalTrue: PascalCase<"hello WORLD", { preserveConsecutiveUppercase: true }> = "HelloWORLD";
const pascalFalse: PascalCase<"hello WORLD", { preserveConsecutiveUppercase: false }> = "HelloWorld";

const titleDefault: TitleCase<"hello WORLD"> = "Hello WORLD";
const titleTrue: TitleCase<"hello WORLD", { preserveConsecutiveUppercase: true }> = "Hello WORLD";
const titleFalse: TitleCase<"hello WORLD", { preserveConsecutiveUppercase: false }> = "Hello World";

void [
  camelDefault,
  camelTrue,
  camelFalse,
  pascalDefault,
  pascalTrue,
  pascalFalse,
  titleDefault,
  titleTrue,
  titleFalse,
];
