import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";
import Navigation from "./layouts/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container style={{marginTop:'0.5em'}} className="main">
        <Dashboard />
      </Container> 
    </div>
  );
}

export default App;
