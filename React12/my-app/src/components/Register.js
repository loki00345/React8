import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearError } from '../redux/authSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleRegister = () => {
    if (name.trim() && password.trim()) {
      dispatch(register({ name, password }));
    } else {
      alert("Введіть ім'я та пароль!");
    }
  };

  return (
    <div>
      <h2>Реєстрація</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          dispatch(clearError()); // Очищаємо помилку при зміні поля
        }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          dispatch(clearError());
        }}
      />
      <button onClick={handleRegister}>Зареєструватися</button>
    </div>
  );
};

export default Register;
