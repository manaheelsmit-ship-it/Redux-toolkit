import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    name: "sana",
    email:"sana@gmail.com"
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

export const { updateName, updateEmail } = counterSlice.actions;
export default counterSlice.reducer;