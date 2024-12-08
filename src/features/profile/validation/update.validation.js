import zod from "zod";
import { fromError } from "zod-validation-error";

export const updateSchema = zod
  .object({
    nama_lengkap: zod.string().min(3, "Name must be at least 3 characters"),
    tanggal_lahir: zod.string().min(8, "Date must be at least 8 characters"),
    no_telepon: zod.string().min(9, "Phone must be at least 9 characters"),
    email: zod.string().email(),
    new_password: zod
      .string()
      .min(8, "New Password must be at least 8 characters")
      .optional()
      .or(zod.literal("")),
    old_password: zod
      .string()
      .min(8, "Old Password must be at least 8 characters")
      .optional()
      .or(zod.literal("")),
  })
  .refine(
    (data) =>
      (data.new_password && data.old_password) || (!data.new_password && !data.old_password),
    {
      message: "Both new and old passwords must be provided or none",
      path: ["new_password"],
    }
  );

export function updateSchemaValidation({ nama_lengkap, tanggal_lahir, no_telepon, email, new_password, old_password }) {
  try {
    if (new_password || old_password) {
      updateSchema.parse({ nama_lengkap, tanggal_lahir, no_telepon, email, new_password, old_password });
    } else {
      updateSchema.parse({ nama_lengkap, tanggal_lahir, no_telepon, email });
    }
    return null;
  } catch (error) {
    const validationError = fromError(error);
    return validationError.details.map((issue) => issue.message);
  }
}
