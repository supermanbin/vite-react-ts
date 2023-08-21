import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Input from '../../components/Input';
import HttpClient from "../../utils/httpClient";
import apis from "../../utils/apis";

// button class
const buttonCls = "rounded-md bg-blue-500 focus:ring-blue-200 focus:ring text-white px-3 h-9 w-full transition";

export default function Login() {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({username: 'Mike.Hillyer@sakilastaff.com', password: '12345'});
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

    HttpClient.post(apis.login, {
      username: loginForm.username,
      password: loginForm.password
    }).then(({data}) => {
      console.log(data);
      if (data.access_token) {
        localStorage.setItem('token', data.access_token)
        navigate("/demo")
      }
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
    <div className="absolute sm:w-screen h-screen grid place-items-center px-4 bg-slate-100">
      <form className="w-full bg-white w-2/4 p-4 rounded-md">
        <Input
          className='mb-3'
          labelText='username'
          defaultValue={loginForm.username}
          onChange={changeValueHandler} />
        <Input
          className='mb-3'
          labelText='password'
          type='password'
          defaultValue={loginForm.password}
          onChange={(v) => {setLoginForm({...loginForm, password: v})
        }} />
        <button className={buttonCls} onClick={(e) => {login(e)}}>Login</button>
      </form>
    </div>
  );
}

