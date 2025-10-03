export default function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username: <input type="text" name="username" />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password: <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}