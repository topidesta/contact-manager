export const getContacts = () => {
  return {
    type: "GET_contacts"
  };
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
