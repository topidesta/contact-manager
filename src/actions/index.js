import axios from "axios";

export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  dispatch({
    type: "GET_contacts",
    payload: res.data
  });
};

export const deleteContact = id => {
  return {
    type: "DELETE_contact",
    payload: id
  };
};

export const addContact = contact => {
  return {
    type: "ADD_contact",
    payload: contact
  };
};
