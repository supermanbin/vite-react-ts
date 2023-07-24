import {generateToken} from '../../utils/tools'

export default function Login() {

  const login = () => {
    if (!localStorage.getItem('token')) {
      const randomStr = crypto.randomUUID()
      // Math.random().toString(36).slice(-8)
      console.log(randomStr);
      
      localStorage.setItem('token', randomStr)
    }
  }

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
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}