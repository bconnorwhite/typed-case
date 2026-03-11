import { whitespace } from "./whitespace.js";

export type WordSeparators = typeof wordSeparators[number];

const wordSeparators = [...whitespace, "_", "-", ".", "/"] as const;
