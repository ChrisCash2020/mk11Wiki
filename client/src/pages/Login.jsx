import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import _404 from '../helpers/_404';
export default function Login(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  async function login() {
    const res = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
      credentials: 'include',
    });
    let data = await res.json();
    if (data.length == 1) {
      props.setAuthState({
        status: true,
        user: data[0],
      });
      navigate('/');
    }
  }
  async function register() {
    const res = await fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
      }),
      credentials: 'include',
    });
    let data = await res.json();
    if (data.length == 1) {
      props.setAuthState({
        status: true,
        user: data[0],
      });
      navigate('/');
    }
  }
  return (
    <>
      {params.type == 'login' ? (
        <div className='container'>
          <div className='loginContainer'>
            <label>Username:</label>
            <input
              onChange={(e) => setLoginUsername(e.target.value)}
              type='text'
            />
            <label>Password:</label>
            <input
              onChange={(e) => setLoginPassword(e.target.value)}
              type='password'
            />
            <button onClick={login}> Login </button>
          </div>
        </div>
      ) : params.type == 'register' ? (
        <div className='container'>
          <div className='loginContainer'>
            <label>Username:</label>
            <input
              onChange={(e) => setRegisterUsername(e.target.value)}
              type='text'
            />
            <label>Password:</label>
            <input
              onChange={(e) => setRegisterPassword(e.target.value)}
              type='password'
            />
            <button onClick={register}> Register </button>
          </div>
        </div>
      ) : (
        <_404 />
      )}
    </>
  );
}
