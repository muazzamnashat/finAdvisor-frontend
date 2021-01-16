const ROOT_URL = "http://localhost:3000/api/v1";

export function signUp(data) {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_USER_REQUEST" });
    fetch(`${ROOT_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => dispatch({ type: "ADD_USER", payload: response }));
  };
}
