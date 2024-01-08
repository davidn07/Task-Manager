import "./App.css";
import { Login, Navbar } from "./components";

function App() {
  return (
    <div>
      <div class="flex-container">
        <Navbar />
        <div class="body-section">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
