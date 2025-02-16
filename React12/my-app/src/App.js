import { useSelector } from 'react-redux';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Вітаємо в застосунку!</h1>
      {user ? (
        <div>
          <h2>Привіт, {user.name}!</h2>
          <Logout />
        </div>
      ) : (
        <div>
          <Register />
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
