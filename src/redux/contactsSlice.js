import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './operation';
import {
  handlePending,
  handleFulfieldGet,
  handleFulfieldAdd,
  handleFulfilledDelete,
  handleRejected,
} from './contactReducer';

const handleAction = type =>
  isAnyOf(
    getContactsThunk[type],
    addContactsThunk[type],
    deleteContactsThunk[type]
  );

const status = {
  PENDING: 'pending',
  REGECTED: 'rejected',
};

const initialState = {
  contactItems: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, REGECTED } = status;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfieldGet)
      .addCase(addContactsThunk.fulfilled, handleFulfieldAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(handleAction(PENDING), handlePending)
      .addMatcher(handleAction(REGECTED), handleRejected);
  },
});

//export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// addContact:  {
//   extraReducers(state, { payload }) {
//     state.contacts = [...state.contacts, payload];
//   },
//   prepare(newContact) {
//     return { payload: { id: nanoid(), ...newContact } };
//   },
// },
// deleteContact(state, { payload }) {
//   state.contacts = state.contacts.filter(contact => contact.id !== payload);
// },
