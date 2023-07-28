import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Input from '../../components/Input';
import axios from 'axios';

// input class
const inputCls = "rounded-md border border-slate-200 focus:outline-none focus:border-indigo-500 focus:border-2 focus:ring-indigo-200 focus:ring h-9 px-3 transition w-full text-slate-800";
// label class
const labelCls = "block mb-4";
// button class
const buttonCls = "rounded-md bg-blue-500 focus:ring-blue-200 focus:ring text-white px-3 h-9 w-full transition";
// the input label class
const inputLabel = "mb-2 block text-slate-800";

export default function Login() {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({username: '', password: ''});
  const [username, setUserName] = useState('');

  /**
   * 登录操作
   * @param e 
   * @returns 
   */
  function login(e: React.MouseEvent) {
    e.preventDefault();

    console.log(loginForm);
    
    if (!loginForm?.username || !loginForm?.password) {
      alert('不能为空');
      return;
    }

    axios.post('/iam/signIn', {
      username: loginForm.username,
      password: loginForm.password
    }).then((val) => {
      console.log(val);
    }).catch((error) => {
      console.error(error);
    })

    // if (!localStorage.getItem('token')) {
    //   const randomStr = crypto.randomUUID()
    //   localStorage.setItem('token', randomStr)
    //   navigate("/demo")
    // }
    // navigate("/demo")
  }

  function changeValueHandler(val:any) {
    setLoginForm({...loginForm, username: val})
  }


  return (
    <div className="absolute w-screen h-screen grid place-items-center px-4 bg-slate-100">
      <form className="w-full bg-white w-2/4 p-4 rounded-md">
        <Input className='mb-3' labelText='username' value={loginForm.username}  onChange={changeValueHandler} />
        <Input className='mb-3' labelText='password' type='password'  onChange={(v) => {setLoginForm({...loginForm, password: v})
        }} />
        <button className={buttonCls} onClick={(e) => {login(e)}}>Login</button>
      </form>
    </div>
  );
}