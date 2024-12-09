/**
 * @file api.ts
 * @description Functions that interact with the backend Api using axios and can be used with React Query.
 */

import axiosInstance from './axios';
import { PasswordEntryResult, PasswordEntryListItem } from '@/types/password';

// Add a new password entry
export async function addPassword(label: string, username: string, password: string): Promise<void> {
  await axiosInstance.post('passwords/add', { label, username, password });
}

// Search for a password entry by label.
export async function searchPasswordByLabel(label: string): Promise<PasswordEntryResult | null> {
  try {
    const res = await axiosInstance.post<PasswordEntryResult>('/passwords/search', { label });
    return res.data;
  } catch {
    return null;
  }
}

// Get all stored password entries
export async function updatePassword(label: string, newUsername: string, newPassword: string): Promise<void> {
  await axiosInstance.put('/passwords/update', { label, newUsername, newPassword });
}

// Get all the stored password entries
export async function getAllPasswords(): Promise<PasswordEntryListItem[]> {
  const res = await axiosInstance.get<PasswordEntryListItem[]>('/passwords/all');
  return res.data;
}
