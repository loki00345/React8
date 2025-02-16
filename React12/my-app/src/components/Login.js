import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name, password }));
  };

  return (
    <div>
      <h2>Вхід</h2>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Увійти</button>
    </div>
  );
};

export default Login;
