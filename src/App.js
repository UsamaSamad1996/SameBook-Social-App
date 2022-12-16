import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./contextAPI/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);

  // console.log({ user });
  return (
    <Routes>
      <Route exact path="/" element={user ? <HomePage /> : <LoginPage />} />
      <Route
        exact
        path="/Register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      {/* <Route
          exact
          path="/LoginPage"
          element={user ? <HomePage /> : <LoginPage />}
        /> */}
      <Route
        exact
        path="/Profile/:id"
        element={user ? <ProfilePage /> : <LoginPage />}
      />
    </Routes>
  );
}

export default App;
