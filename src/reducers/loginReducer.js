export default function loginReducer(state = false, action) {
  switch (action.type) {
    case "SUCCESS":
      // console.log("This is user reducer success section");
      return true;
    default:
      return state;
  }
}
