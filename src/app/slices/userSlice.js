import { createSlice } from '@reduxjs/toolkit';

const getUserFromLocalStorage = () => {
	const saved = localStorage.getItem('user');
	const initialValue = JSON.parse(saved);
	return initialValue || null;
};

const initialState = {
	value: getUserFromLocalStorage(),
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserTo: (state, action) => {
			state.value = action.payload;
			localStorage.setItem('user', JSON.stringify(action.payload));
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUserTo } = userSlice.actions;

export default userSlice.reducer;
