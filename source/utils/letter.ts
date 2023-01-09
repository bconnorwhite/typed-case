
export type UpperCaseLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export type LowerCaseLetter = Lowercase<UpperCaseLetter>;

/**
Returns a boolean for whether the string is uppercased.
*/
export type IsUpperCase<T extends string> = T extends Uppercase<T> ? true : false;

/**
Returns a boolean for whether the string is lowercased.
*/
export type IsLowerCase<T extends string> = T extends Lowercase<T> ? true : false;
