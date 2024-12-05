import instance from "../../../utils/instance.js";

export async function updateData(userId, data) {
  try {
    const res = await instance.put(`/user/data/${userId}`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
}