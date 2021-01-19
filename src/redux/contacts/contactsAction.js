import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addToContacts = createAction("ADD_TO_CONTACTS", (name, number) => ({
  payload: {
    contacts: {
      name: name,
      id: uuidv4(),
      number: number,
    },
  },
}));
const removeContacts = createAction("REMOVE_CONTACT");
const changeFilter = createAction("CHANGE_FILTER");

export { addToContacts, removeContacts, changeFilter };
