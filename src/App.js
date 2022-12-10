import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/Home" element={<HomePage />} />
      <Route exact path="/Profile" element={<ProfilePage />} />
      <Route exact path="/LoginPage" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
