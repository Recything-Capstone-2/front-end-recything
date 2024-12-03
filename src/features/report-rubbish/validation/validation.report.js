import zod from "zod";
import { fromError } from "zod-validation-error";

export const reportRubbishSchema = zod.object({
  tanggal_laporan: zod.string().min(8, "Date must be at least 3 characters"),
  location: zod.string().min(3, "Location must be at least 3 characters"),
  description: zod.string().min(3, "Description must be at least 3 characters"),
});

export function reportRubbishSchemaValidation({tanggal_laporan, location, description}) {
  try {
    reportRubbishSchema.parse({tanggal_laporan, location, description});
    return null;
  } catch (error) {
    const validationError = fromError(error);
    return validationError.details.map(issue => issue.message);
  }
}