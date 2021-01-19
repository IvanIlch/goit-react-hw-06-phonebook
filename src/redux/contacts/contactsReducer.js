import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addToContacts, removeContacts, changeFilter } from "./contactsAction";

const onAddContact = (state, action) => {
  const { name, id, number } = action.payload.contacts;
  return [...state, { name, id, number }];
};
const onRemoveContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const contacts = createReducer([], {
  [addToContacts]: onAddContact,
  [removeContacts]: onRemoveContact,
});

const filter = createReducer("", {
  [changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
