import { json } from "react-router";

const signIn = async ({ email, password }) => {
 let result = await fetch(" http://localhost:3001/api/v1/user/login", { 
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })
  result = await result.stringify()
    .then((response) => response.json())
    .then((data) => alert(data));
  console.log(json);
};

export default signIn;
