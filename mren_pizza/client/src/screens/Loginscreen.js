import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
export default function Loginscreen() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);
  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: '35px' }}>
            {' '}
            Login
          </h2>
          {loading && <Loading />}
          {error && <Error error="Wrong Credentials" />}
        </div>
        <br />
        <div className="col-md-7 mt-2 shadow p-3 mb-5 bg-white rounded">
          <input
            required
            type="text"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />
          <button className="btn" onClick={login}>
            Login
          </button>
          <a
            href="/register"
            style={{
              color: 'Green',
              textDecoration: 'none',
              fontFamily: 'bold',
            }}
            className="mt-2"
          >
            <br />
            Register Now!!
          </a>
        </div>
      </div>
    </div>
  );
}
