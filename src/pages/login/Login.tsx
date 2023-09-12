import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Input from '../../components/Input';
import httpClient from '../../utils/httpClient';

export default function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ username: 'Mike.Hillyer@sakilastaff.com', password: '12345' });

  /**
   * 登录操作
   * @param e
   * @returns
   */
  function login(e: React.MouseEvent) {
    e.preventDefault();

    if (!loginForm?.username || !loginForm?.password) {
      alert('不能为空');
      return;
    }

    httpClient
      .post('/iam/signIn', {
        username: loginForm.username,
        password: loginForm.password,
      })
      .then((val) => {
        console.log(val);
        if (val.data?.access_token) {
          localStorage.setItem('access_token', val.data?.access_token);
          navigate('/demo');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function changeValueHandler(val: string) {
    setLoginForm({ ...loginForm, username: val });
  }


  return (
    <div className="absolute sm:w-screen h-screen grid place-items-center px-4 bg-slate-100">
      <form className="w-full bg-white w-2/4 p-4 rounded-md">
        <Input className="mb-3" labelText="username" defaultValue={loginForm.username} onChange={changeValueHandler} />
        <Input
          className="mb-3"
          labelText="password"
          type="password"
          defaultValue={loginForm.password}
          onChange={(v) => {
            setLoginForm({ ...loginForm, password: v });
          }}
        />
        <button
          onClick={(e) => {
            login(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

