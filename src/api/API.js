const ROOT_URL = "http://localhost:3000/api/v1";

const fetchTransactions = () =>{
    // hard coding the user id now later need to find current user id 
  return fetch(`${ROOT_URL}/user_transactions?id=${2}`)
    .then(response => response.json())
    .then(response => console.log(response))
}


export const API = {fetchTransactions}