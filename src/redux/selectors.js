import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.Items;
export const selectFilter = state => state.filter.filterQuery;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisualContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterQuery) => {
    return contacts.filter(({ name, phone }) => {
      name.toLowerCase().includes(filterQuery.toLowerCase().trim()) ||
        phone.includes(filterQuery.toLowerCase().trim());
    });
  }
);
