import { configureStore, createSlice } from '@reduxjs/toolkit';
import state from './state';

const basketSlice=createSlice ({
    name:'basket',
    initialState: state,
    reducers:{
        addItem:(state,action)=>{
            return state.map(item=>{
                if(item.id!==action.payload.id){
                    return item;
                }

                return {
                    ...item,
                    added:true
                }
            })
            
        }
    }
});


const store=configureStore({reducer:basketSlice.reducer});

export const {addItem}=basketSlice.actions;

export {basketSlice,store}