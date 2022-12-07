import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={"this is social app"} />
      <Route exact path="/Home" element={<HomePage />} />
      <Route exact path="/Profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
