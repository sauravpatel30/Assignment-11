import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './router/login';
import Register from './router/register';
import List from './router/list';
import Delete from './router/del';
import Update from './router/update';

const Router = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </div>
)
export default Router;