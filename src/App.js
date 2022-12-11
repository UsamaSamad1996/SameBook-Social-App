import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/LoginPage" element={<LoginPage />} />
      <Route exact path="/Profile/:username" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
