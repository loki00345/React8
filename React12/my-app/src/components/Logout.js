import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Вийти</button>;
};

export default Logout;
