import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2025 My Website</footer>
    </div>
  );
}

export default App;
