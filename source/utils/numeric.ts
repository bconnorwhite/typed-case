
export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type IsDigit<T extends string> = T extends Digit ? true : false;

export type IsNumeric<T extends string> = T extends `${number}`
  ? T extends " "
    ? false
    : true
  : false;
