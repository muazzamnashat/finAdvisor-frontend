function userReducer(state = {}, action) {
  switch (action.type) {
    case "START_ADDING_USER_REQUEST":
      console.log("This is userReducer start request section");
      return state;

    case "ADD_USER":
      console.log("This is userReducer adding section");
      return { ...state, ...action.payload };

    case "UPDATE_USER":
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

export default userReducer;
