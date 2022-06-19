import { createAction } from "@reduxjs/toolkit";
import { ADD, DEL, FILTER } from "./contactsTypes";
import { nanoid } from "nanoid";

export const addContact = createAction(ADD, (contact)=>({payload:{id:nanoid(), ...contact}}))
export const deleteContact = createAction(DEL)
export const filterContact = createAction(FILTER)