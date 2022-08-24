import Login from "./Login";

export default function LoginRender() {
  const isLoggedIn = false;
  const userRegistered = false;
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login isRegistered={userRegistered} />}
    </div>
  );
}
