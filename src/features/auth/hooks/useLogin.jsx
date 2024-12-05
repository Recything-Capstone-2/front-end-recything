import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchemaValidation } from "../validation/auth.validation.js";
import useUser from "../../../store/userStore.js";
import { apiLogin } from "../service/api.login.js";

export default function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    setLoading(true);
    setErrorEmail("");
    setErrorPassword("");
    setError("");

    const dataForm = new FormData(event.target);
    const email = dataForm.get("email");
    const password = dataForm.get("password");

    const validationErrors = loginSchemaValidation({ email, password });
    // console.log(validationErrors);
    if (Array.isArray(validationErrors) && validationErrors.length > 0) {
      setLoading(false);
      validationErrors.map((error, index) => {
        if (error.includes("email")) {
          setErrorEmail(error);
          console.log("email", error);
        } else if (error.includes("Password")) {
          setErrorPassword(error);
          console.log("password", error);
        }
      });
      return;
    }

    // HIT API
    try {
      const data = await apiLogin({ email, password });
      localStorage.setItem("token", data.data.token);
      setUser(data.data);

      if (data.data.role === "admin") {
        navigate("/dashboard-admin");
      } else {
        navigate("/beranda-user");
      }
    } catch (error) {
      setError("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  }

  return { loading, errorEmail, errorPassword, error, handleLogin };
}
