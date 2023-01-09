<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>typed-case</h1>
  <a href="https://npmjs.com/package/typed-case">
    <img alt="NPM" src="https://img.shields.io/npm/v/typed-case.svg">
  </a>
  <a href="https://github.com/bconnorwhite/typed-case">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/typed-case.svg">
  </a>
</div>

<br />

<blockquote align="center">Convert between typesafe string casings.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/typed-case">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/typed-case?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## About

A zero-dependency package for converting between string casings in a type-safe way.

### Supported Casings
| Name                 |
| -------------------- |
| camelCase            |
| PascalCase           |
| kebab-case           |
| snake_case           |
| Train-Case           |
| CONSTANT_CASE        |
| Title Case           |
| UPPER CASE           |
| lower case           |

## Installation

```sh
yarn add typed-case
```

```sh
npm install typed-case
```

```sh
pnpm add typed-case
```

## Contents

- [Usage](#usage)
  - [CamelCase](#camelcase)
  - [PascalCase](#pascalcase)
  - [TrainCase](#traincase)
  - [KebabCase](#kebabcase)
  - [SnakeCase](#snakecase)
  - [ConstantCase](#constantcase)
  - [Title Case](#title-case)
  - [UpperCase, LowerCase](#uppercase-lowercase)
  - [Capitalize, Uncapitalize](#capitalize-uncapitalize)
- [License](#license)

## Usage

### CamelCase
```ts
import { toCamelCase, CamelCase } from "typed-case";

toCamelCase("hello world"); // "helloWorld"
toCamelCase("hello_world"); // "helloWorld"
toCamelCase("hello-world"); // "helloWorld"
```

#### Preserve UpperCase

```ts
toCamelCase("hello WORLD"); // "helloWORLD"
toCamelCase("hello WORLD", { preserveUpperCase: false }); // "helloWorld"
```

### PascalCase

```ts
import { toPascalCase, PascalCase } from "typed-case";

toPascalCase("hello world"); // "HelloWorld"
toPascalCase("hello_world"); // "HelloWorld"
toPascalCase("hello-world"); // "HelloWorld"
```

#### Preserve UpperCase

```ts
toPascalCase("hello WORLD"); // "HelloWORLD"
toPascalCase("hello WORLD", { preserveUpperCase: false }); // "HelloWorld"
```

### TrainCase

```ts
import { toTrainCase, TrainCase } from "typed-case";

toTrainCase("hello world"); // "Hello-World"
toTrainCase("hello_world"); // "Hello-World"
toTrainCase("hello-world"); // "Hello-World"
```

### TitleCase

```ts
import { toTitleCase, TitleCase } from "typed-case";
toTitleCase("hello world"); // "Hello World"
toTitleCase("hello_world"); // "Hello World"
toTitleCase("hello-world"); // "Hello World"
```

#### Preserve UpperCase

```ts
toTrainCase("hello WORLD"); // "Hello-WORLD"
toTrainCase("hello WORLD", { preserveUpperCase: false }); // "Hello-World"
```

### KebabCase

```ts
import { toKebabCase, KebabCase } from "typed-case";

toKebabCase("hello world"); // "hello-world"
toKebabCase("hello_world"); // "hello-world"
toKebabCase("hello-world"); // "hello-world"
```

### SnakeCase

```ts
import { toSnakeCase, SnakeCase } from "typed-case";

toSnakeCase("hello world"); // "hello_world"
toSnakeCase("hello_world"); // "hello_world"
toSnakeCase("hello-world"); // "hello_world"
```

### ConstantCase

```ts
import { toConstantCase, ConstantCase } from "typed-case";

toConstantCase("hello world"); // "HELLO_WORLD"
toConstantCase("hello_world"); // "HELLO_WORLD"
toConstantCase("hello-world"); // "HELLO_WORLD"
```

### UpperCase, LowerCase

```ts
import { toUpperCase, toLowerCase, UpperCase, LowerCase } from "typed-case";

toUpperCase("hello world"); // "HELLO WORLD"
toLowerCase("HELLO WORLD"); // "hello world"
```

### Capitalize, Uncapitalize

```ts
import { capitalize, uncapitalize } from "typed-case";

capitalize("hello world"); // "Hello world"
uncapitalize("Hello world"); // "hello world"
```

<!--BEGIN FOOTER-->

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/typed-case.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
