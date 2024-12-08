import instance from "../../../utils/instance.js";

export async function updatePhoto(userId, formData) {
  try {
    const res = await instance.put(`/user/photo/${userId}`, formData);
    return res;
  } catch (error) {
    console.log(error);
  }
}