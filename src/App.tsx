import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout";
import PublicHome from "./pages/publicHome/PublicHome";
import { PrivateRoute } from "./routes/privateroute";

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
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
