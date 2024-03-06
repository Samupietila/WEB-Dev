// imports
import { useLogin } from "../hooks/useLogin";
import { useField } from "../hooks/useField";
import { useNavigate } from "react-router-dom";

// Login component
const Login = () => {
  const navigate = useNavigate();
  const emailInput = useField("text");
  const email = emailInput.value;
  const passwordInput = useField("password");
  const password = passwordInput.value;
  const { handleLogin } = useLogin({ email, password });
  return (
    <form className="login" onSubmit={handleLogin}>
      <h3>Log In</h3>

      <label>Email:</label>
      <input {...emailInput} />
      <label>Password:</label>
      <input {...passwordInput} />

      <button>Log in</button>
    </form>
  );
};

export default Login;
