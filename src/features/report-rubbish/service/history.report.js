import instance from "../../../utils/instance.js";

export async function historyReportApi() {
  try {
    const response = await instance.get("/report-rubbish/history");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}