import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import Navbar from "./components/Navbar.jsx";
import "./css/App.css";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
