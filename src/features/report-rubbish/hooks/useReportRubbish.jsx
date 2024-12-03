import { useState } from "react";
import { reportRubbishSchemaValidation } from "../validation/validation.report.js";
import instance from "../../../utils/instance.js";

export default function useReportRubbish(address,position) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorDate, setErrorDate] = useState("");
  const [errorLocation, setErrorLocation] = useState("");
  const [errorDescription, setErrorDescription] = useState("");

  const handleSubmitReport = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorDate("");
    setErrorLocation("");
    setErrorDescription("");

    const formData = new FormData(event.target);
    formData.append("location", address);
    console.log("latitude", position[0]);
    formData.append("latitude", position[0]);
    formData.append("longitude", position[1]);

    const tanggal_laporan = formData.get("tanggal_laporan");
    const location = formData.get("location");
    const description = formData.get("description");

    // VALOIDATION
    const validationErrors = reportRubbishSchemaValidation({tanggal_laporan, location, description});
    if (Array.isArray(validationErrors) && validationErrors.length > 0) {
      setLoading(false);
      validationErrors.map((error) => {
        if (error.includes("Date")) {
          setErrorDate("Date is required");
        } 
        if (error.includes("Location")) {
          setErrorLocation("Location is required");
        }
        if (error.includes("Description")) {
          setErrorDescription("Description is required");
        }
      });
      return;
    }

    // HIT API
    try {
      setLoading(true);
      const response = await instance.post("/report-rubbish", formData);
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengirim laporan:", error);
    } finally {
      setLoading(false);
    }
  };

  return { success, loading, errorDate, errorLocation, errorDescription, handleSubmitReport };
}
