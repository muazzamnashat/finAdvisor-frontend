function userReducer(state = [], action) {
  switch (action.type) {
    case "START_ADDING_USER_REQUEST":
      return state;

    case "ADD_USER":
      return action.payload;

    default:
      return state;
  }
}

export default userReducer;
