function categoryReducer(state = [], action) {
  switch (action.type) {
    case "START_ADDING_CATEGORIES_REQUEST":
      console.log("This is category reducer request section");
      return state;

    case "ADD_CATEGORIES":
      console.log("This is category reducer add section");
      return [...state, action.payload];

    default:
      return state;
  }
}

export default categoryReducer;
