const initState = {
  contacts: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case "GET_contacts":
      return { ...state, contacts: action.payload };

    case "DELETE_contact":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "ADD_contact":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
