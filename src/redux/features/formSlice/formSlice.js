import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "formSlice",
    initialState: {
        isModal: false,
        checkedItem:{} 
    },

    reducers: {
        modalToggler(state, action) {
            state.isModal = action.payload;
        },
        selectedData(state, action) {
            state.checkedItem = action.payload;
        },
 
    },


});

export default formSlice.reducer;
export const { modalToggler,selectedData} = formSlice.actions