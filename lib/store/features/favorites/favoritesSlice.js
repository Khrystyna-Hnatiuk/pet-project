import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.items.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload)
        },
        clearFavorite:(state)=>{
            state.items = []
        }
    }
})

export const {addFavorite,removeFavorite,clearFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;