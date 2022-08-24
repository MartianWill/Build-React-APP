import Input from "./Input";
import "./Login.css";

function Login(props) {
  return (
    <form className="form">
      <h1>Hello</h1>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      {props.isRegistered === false && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistered ? "login" : "register"}</button>
    </form>
  );
}

export default Login;
