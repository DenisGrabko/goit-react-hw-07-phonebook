export const handlePending = state => {
  state.isLoading = true;
};

export const handleFullfieldGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = payload;
};

export const handleFullfieldAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = [payload, ...state.contactsItems];
};

export const handleFullfieldDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = state.contactItems.filter(({ id }) => id !== payload);
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
