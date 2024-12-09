/**
 * @file password.ts
 * @description Contains Typescript interfaces for password entries and results
 */

export interface PasswordEntryResult {
  label: string;
  username: string;
  password: string;
}

export interface PasswordEntryListItem {
  labelHash: string;
  username: string;
  password: string;
}
