import instance from "../../../utils/instance.js";

export async function apiRegister({nama_lengkap,  email, tanggal_lahir, no_telepon, password}) {
 try {
   const response = await instance.post('/register', {nama_lengkap, email, tanggal_lahir, no_telepon, password})
   return response.data;
 } catch (error) {
   throw new Error("Error registering user.");
 }
}
