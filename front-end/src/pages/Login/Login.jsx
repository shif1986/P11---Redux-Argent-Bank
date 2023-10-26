import { Link } from "react-router-dom";
import signIn, { login } from "../../services/userService";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/ userActions";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn({ email, password });
      console.log(response);
      if (response.status === 200) {
        dispatch(setToken(response.body.token));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Link to="/user" className="sign-in-button">
          Sign In
        </Link>
      </form>
    </section>
  );
};

export default Login;
