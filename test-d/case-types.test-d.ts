import {
  expectAssignable,
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

expectAssignable<PascalCase<Foo>>("FooBar");
expectAssignable<PascalCase<Foo>>("BazQux");
expectNotAssignable<PascalCase<Foo>>("FooQux");
expectNotAssignable<PascalCase<Foo>>("BazBar");

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
