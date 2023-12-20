import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://65808f813dfdd1b11c41bde6.mockapi.io';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('./contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const { data } = await axios.post('./contacts', { name, phone });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`./contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
