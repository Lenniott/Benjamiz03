import { useState } from "react";
import { HomePage } from "./pages";
import { AppHeader, AppFooter } from "./shared";

function App() {
  const [page, setPage] = useState(<HomePage />);

  return (
    <div className="flex flex-col items-center justify-center">
      <AppHeader />
      {page}
      <AppFooter />
    </div>
  );
}

export default App;
