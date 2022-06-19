import { createReducer } from "@reduxjs/toolkit";
import { combineReducers} from 'redux'
import { addContact, deleteContact, filterContact } from "./contactsActions";



const items = createReducer([], {
    [addContact]:(state,{payload})=>{
        if(state.find(({name})=>name === payload.name)) {
            alert(`Contact ${payload.name} is already exist`)
            return state
        }
        return [...state, payload]
    },
    [deleteContact]:(state,{payload})=>state.filter((id)=>id !== payload.id)    
})

const filter = createReducer('', {
    [filterContact]:(_,{payload})=>payload
})

export default combineReducers({items,filter})