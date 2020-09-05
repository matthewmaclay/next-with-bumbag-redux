import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'layout',
  initialState: {
    menuIsOpen: false,
    modalWindow: false,
  },
  reducers: {
    openMenu: (state) => console.log(state),
    // hideMenu: state => state + 1,
  },
});

const { actions, reducer } = postsSlice;

export const { openMenu } = actions;

export default reducer;
