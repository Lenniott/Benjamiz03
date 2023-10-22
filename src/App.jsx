
import { Route, Routes } from "react-router-dom";
import { HomePage, Experience } from "./pages";
import { AppHeader, AppFooter } from "./shared";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

      <AppFooter />
    </div>
  );
}

export default App;
