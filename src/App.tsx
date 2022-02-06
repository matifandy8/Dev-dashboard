import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout";
import PublicHome from "./pages/publicHome/PublicHome";
import { PrivateRoute } from "./routes/privateroute";
import Login from "./pages/auth/login/login";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicHome />} path="/" />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
