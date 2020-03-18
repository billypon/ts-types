export interface Dictionary<T = any> {
  [key: string]: T;
  [key: number]: T;
}

export interface StringDictionary extends Dictionary<string> {
}
