import { configureStore, createSlice } from '@reduxjs/toolkit';
import state from './state';

const basketSlice=createSlice ({
    name:'basket',
    initialState: state,
    reducers:{
        addItem:(state,action)=>{
            console.log(state);
            console.log(action);
            
        }
    }
});


const store=configureStore({reducer:basketSlice.reducer});

export const {addItem}=basketSlice.actions;

export {basketSlice,store}