import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Privacy />} path="/privacy" />
        <Route element={<Terms />} path="/terms" />
        <Route element={<Blog />} path="/blog" />
      </Routes>
    </Router>
  );
}

export default App;
