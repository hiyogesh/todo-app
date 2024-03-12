import { Routes, Route } from "react-router-dom";

import Home from "../routes/Home";
import About from "../routes/About";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import NotMatch from "../routes/NotMatch";
import Layout from "./Layout";
import SinglePage from "../routes/SinglePage";
import ProtectedRoute from "./ProtectedRoute";
import AboutApp from "../routes/AboutApp";
import AboutDeveloper from "../routes/AboutDeveloper";

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        >
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />

        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
