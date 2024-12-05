/**
 * Interface representing a password entry returned from the backend.
 */

export interface PasswordEntryResult {
  label: string;
  username: string;
  password: string;
}

/**
 * Interface representing a password entry in a list (Without searching by label).
 * This includes label hash for refrence
 */

export interface PasswordEntryListItem {
  labelHash: string;
  username: string;
  password: string;
}
