export default function Login() {
  return (
    <div className="absolute w-screen h-screen grid place-items-center px-4">
      <form action="" className="w-full bg-white">
        <label htmlFor="username">
          <span>username</span>
          <input type="text" id="username" />
        </label>
        <label htmlFor="password">
          <span>password</span>
          <input type="password" id="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}