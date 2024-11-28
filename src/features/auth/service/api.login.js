import instance from "../../../utils/instance.js";

export async function apiLogin({email, password}) {
 try {
   const response = await instance.post('/login', {email, password})
   return response.data;
 } catch (error) {
   throw new Error("Invalid credentials.");
 }
}
