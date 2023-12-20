import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './operation';
import {
  handlePending,
  handleFullfieldGet,
  handleFullfieldAdd,
  handleFullfieldDelete,
  handleReject,
} from './contactReducer';

const handleAction = type =>
  isAnyOf(
    getContactsThunk[type],
    addContactsThunk[type],
    deleteContactsThunk[type]
  );
const status = {
  Pending: 'pending',
  Rejected: 'rejected',
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { Pending, Rejected } = status;
    builder
      .addCase(getContactsThunk.fulfilled, handleFullfieldGet)
      .addCase(addContactsThunk.fulfilled, handleFullfieldAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFullfieldDelete)
      .addMatcher(handleAction(Pending), handlePending)
      .addMatcher(handleAction(Rejected), handleReject);
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
