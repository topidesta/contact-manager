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
    }
  ]
};

export default function(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
