import { useState } from "react";
import { reportRubbishSchemaValidation } from "../validation/validation.report.js";
import instance from "../../../utils/instance.js";

export default function useReportRubbish(address,position) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorDate, setErrorDate] = useState("");
  const [errorLocation, setErrorLocation] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorCategory, setErrorCategory] = useState("");

  const handleSubmitReport = async (event) => {

    event.preventDefault();
    setLoading(true);
    setErrorDate("");
    setErrorLocation("");
    setErrorDescription("");
    setErrorCategory("");

    const formData = new FormData(event.target);
    formData.append("location", address);
    formData.append("latitude", position[0]);
    formData.append("longitude", position[1]);

    const tanggal_laporan = formData.get("tanggal_laporan");
    const location = formData.get("location");
    const description = formData.get("description");
    const category = formData.get("category");

    console.log(tanggal_laporan, location, description, category);

    // VALOIDATION
    const validationErrors = reportRubbishSchemaValidation({tanggal_laporan, location, description, category});
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
          setErrorDescription("Description must be at least 3 characters");
        }
        if (error.includes("Category")) {
          setErrorCategory("Category is required");
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

  return { success, loading, errorDate, errorLocation, errorDescription, errorCategory, handleSubmitReport };
}
