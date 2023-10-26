import { json } from "react-router";

const signIn = async(data) =>{

   
    fetch(' http://localhost:3001/api-docs/user/login', { method: 'GET' })
    .then(response => response.json())
    .then(data => alert(data) )
    console.log(json);
}
export default (signIn)
