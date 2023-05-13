import { Route, Routes } from 'react-router-dom';
import { Home } from 'Pages/HomePage';
import { Login } from 'Pages/LoginPage';
import { SignUp } from 'Pages/SignUpPage';
import React from 'react';
import { Layout } from 'components/Layout';
import { ContactsPage } from 'Pages/ContactsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}
