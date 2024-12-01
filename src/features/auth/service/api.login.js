import instance from "../../../utils/instance.js";

export async function apiLogin({email, password}) {
 try {
  const response = await instance.post('/login', {email, password})

  return response.data;
 }catch (error) {
  if (error.response && error.response.status === 401) {
    throw new Error("Invalid credentials."); 
  } else {
    throw new Error("Terjadi kesalahan pada server.");
  }
 }
}
