const initState = {
  contacts: [
    {
      id: 1,
      name: "yasweb",
      email: "yasweb@gmail.com",
      phone: "0666666"
    },
    {
      id: 2,
      name: "yasweb react",
      email: "react@gmail.com",
      phone: "07777777777"
    },
    {
      id: 3,
      name: "yasweb symfony",
      email: "symfony@gmail.com",
      phone: "08888888"
    },
    {
      id: 4,
      name: "yasweb flutter",
      email: "symfony@gmail.com",
      phone: "08888888"
    }
  ]
};

export default function(state = initState, action) {
  switch (action.type) {
    case "GET_contacts":
      return { ...state };

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
