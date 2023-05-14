import { Route, Routes } from 'react-router-dom';
import React, { lazy, useEffect } from 'react';
import { Layout } from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivetRoute';
import { PublicRoute } from 'components/PublicRoute';

const Home = lazy(() => import('../../Pages/HomePage'));
const SignUp = lazy(() => import('../../Pages/SignUpPage'));
const Login = lazy(() => import('../../Pages/LoginPage'));
const ContactsPage = lazy(() => import('../../Pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
