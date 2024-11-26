import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./index.css";
import Welcome from "./pages/Welcome";
import AirCraft from "./pages/AirCraft";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NewsLetter from "./pages/NewsLetter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/air-craft" element={<AirCraft />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news-letter" element={<NewsLetter />} />
      </Routes>
    </Router>
  );
}
export default App;
