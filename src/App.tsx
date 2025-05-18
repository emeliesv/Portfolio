import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Jenyf from "./pages/Jenyf";
import Fokus from "./pages/Fokus";
import FutureWood from "./pages/FutureWood";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/jenyf" element={<Jenyf />} />
          <Route path="/work/fokus" element={<Fokus />} />
          <Route path="/work/futurewood" element={<FutureWood />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
