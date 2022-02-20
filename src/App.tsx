import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import PublicHome from "./pages/publicHome/PublicHome";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { initializeApp } from "firebase/app";
import { config } from "./config/firebase";
import AuthRoute from "./routes/authRoute";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AuthRoute>
              <PublicHome />
            </AuthRoute>
          }
          path="/"
        />
        <Route
          path="/home"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
