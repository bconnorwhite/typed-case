import {
  expectAssignable,
  expectType,
  expectNotAssignable
} from "tsd";
import type {
  CamelCase,
  PascalCase,
  TitleCase,
  TrainCase
} from "../src/index.js";

type Foo = "foo-bar" | "baz-qux";

expectAssignable<CamelCase<Foo>>("fooBar");
expectAssignable<CamelCase<Foo>>("bazQux");
expectNotAssignable<CamelCase<Foo>>("fooQux");
expectNotAssignable<CamelCase<Foo>>("bazBar");

declare const camelDefault: CamelCase<"hello WORLD">;
declare const camelTrue: CamelCase<"hello WORLD", { preserveConsecutiveUppercase: true }>;
declare const camelFalse: CamelCase<"hello WORLD", { preserveConsecutiveUppercase: false }>;
expectType<"helloWORLD">(camelDefault);
expectType<"helloWORLD">(camelTrue);
expectType<"helloWorld">(camelFalse);

expectNotAssignable<CamelCase<"hello WORLD">>("helloWorld");

expectAssignable<PascalCase<Foo>>("FooBar");
expectAssignable<PascalCase<Foo>>("BazQux");
expectNotAssignable<PascalCase<Foo>>("FooQux");
expectNotAssignable<PascalCase<Foo>>("BazBar");

declare const pascalDefault: PascalCase<"hello WORLD">;
declare const pascalTrue: PascalCase<"hello WORLD", { preserveConsecutiveUppercase: true }>;
declare const pascalFalse: PascalCase<"hello WORLD", { preserveConsecutiveUppercase: false }>;
expectType<"HelloWORLD">(pascalDefault);
expectType<"HelloWORLD">(pascalTrue);
expectType<"HelloWorld">(pascalFalse);

expectNotAssignable<PascalCase<"hello WORLD">>("HelloWorld");

expectAssignable<TrainCase<Foo>>("Foo-Bar");
expectAssignable<TrainCase<Foo>>("Baz-Qux");
expectNotAssignable<TrainCase<Foo>>("Foo-Qux");
expectNotAssignable<TrainCase<Foo>>("Baz-Bar");

expectAssignable<TitleCase<Foo>>("Foo Bar");
expectAssignable<TitleCase<Foo>>("Baz Qux");
expectNotAssignable<TitleCase<Foo>>("Foo-Bar");
expectNotAssignable<TitleCase<Foo>>("Foo Qux");
expectNotAssignable<TitleCase<Foo>>("Baz-Qux");
expectNotAssignable<TitleCase<Foo>>("Baz Bar");

declare const titleDefault: TitleCase<"hello WORLD">;
declare const titleTrue: TitleCase<"hello WORLD", { preserveConsecutiveUppercase: true }>;
declare const titleFalse: TitleCase<"hello WORLD", { preserveConsecutiveUppercase: false }>;
expectType<"Hello WORLD">(titleDefault);
expectType<"Hello WORLD">(titleTrue);
expectType<"Hello World">(titleFalse);

expectNotAssignable<TitleCase<"hello WORLD">>("Hello World");
