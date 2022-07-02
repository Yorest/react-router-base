import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import {FormikBasicPage,FormiKComponents,FormikYupPage,RegisterPage,FormikAbstractation} from '../03-forms/pages'

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />

          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstracion"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page </h1>} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="home" element={<h1>Home Page </h1>} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormiKComponents />} />
          <Route path="formik-abstracion" element={<FormikAbstractation />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
