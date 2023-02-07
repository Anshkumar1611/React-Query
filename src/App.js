import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Routes from "./routes/Routes"

function App() {
  return (
    <div className="App">
      <Navbar />
      {useRoutes(Routes)}
    </div>
  );
}

export default App;
