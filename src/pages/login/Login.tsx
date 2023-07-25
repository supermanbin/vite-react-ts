export default function Login() {

  function login(e: React.MouseEvent) {
    e.preventDefault();
    if (!localStorage.getItem('token')) {
      const randomStr = crypto.randomUUID()
      localStorage.setItem('token', randomStr)
    }
  }

  return (
    <div className="absolute w-screen h-screen grid place-items-center px-4">
      <form action="void 0" className="w-full bg-white">
        <label htmlFor="username">
          <span>username</span>
          <input type="text" id="username" />
        </label>
        <label htmlFor="password">
          <span>password</span>
          <input type="password" id="password" />
        </label>
        <button onClick={(e) => {login(e)}}>Login</button>
      </form>
    </div>
  );
}