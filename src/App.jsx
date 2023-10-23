
import { Route, Routes } from "react-router-dom";
import { HomePage, Experience, About } from "./pages";
import { AppHeader, AppFooter } from "./shared";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<h1>Works</h1>} />
      </Routes>

      <AppFooter />
    </div>
  );
}

export default App;
