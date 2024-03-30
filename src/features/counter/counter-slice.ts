import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value:0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        //incriment
        incremented(state){
            //its okay to do this because immer makes it immutate
            //under the hood
            state.value++
        },
        //decriment
        decremented(state){
            state.value--
        },
        //reset
        reset(state){
            state.value = 0
        },
        //add Some Amount 
        amountAdded(state,action: PayloadAction<number>){
            state.value += action.payload;
        },
    }
});

export const { incremented,decremented,reset} = counterSlice.actions;
export default counterSlice.reducer;