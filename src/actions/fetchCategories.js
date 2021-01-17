const ROOT_URL = "http://localhost:3000/api/v1";

export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_CATEGORIES_REQUEST" });
    fetch(`${ROOT_URL}/categories`, {
      method: "GET", // or 'PUT'
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMH0.AkKpwRGcfuTSup7bVBwRHgnkVmsoOcvt1eWrKvDj2A0",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        response.forEach((category) =>
          dispatch({ type: "ADD_CATEGORIES", payload: category })
        );
      });
  };
}
