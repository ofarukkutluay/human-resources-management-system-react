import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <div className="App">
      
        <Dashboard />
        <Button>Tıkla</Button>
      
    </div>
  );
}

export default App;
