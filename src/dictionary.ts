export interface Dictionary<T = any> {
  [key: string]: T;
}

export interface StringDictionary extends Dictionary<string> {
}
