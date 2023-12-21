export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfieldGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = payload;
};

export const handleFulfieldAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = [payload, ...state.contactItems];
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = state.contactItems.filter(({ id }) => id !== payload);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
