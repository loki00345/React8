import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('auth')) || null,
  users: JSON.parse(localStorage.getItem('users')) || [], // Масив зареєстрованих користувачів
  error: null, // Для повідомлень про помилки
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const { name, password } = action.payload;

      // Перевірка чи існує користувач
      const existingUser = state.users.find(user => user.name === name);
      if (existingUser) {
        state.error = "Користувач із таким ім'ям уже існує!";
        return;
      }

      const newUser = { name, password };
      state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.users));

      state.user = { name };
      localStorage.setItem('auth', JSON.stringify({ name }));
      state.error = null; // Очищаємо помилку при успішній реєстрації
    },
    login: (state, action) => {
      const { name, password } = action.payload;
      const existingUser = state.users.find(user => user.name === name && user.password === password);

      if (existingUser) {
        state.user = { name };
        localStorage.setItem('auth', JSON.stringify({ name }));
        state.error = null; // Очищаємо помилку
      } else {
        state.error = "Неправильне ім'я або пароль!";
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('auth');
      state.error = null; // Очищаємо помилку при виході
    },
    clearError: (state) => {
      state.error = null; // Додамо екшен для очищення помилок
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
