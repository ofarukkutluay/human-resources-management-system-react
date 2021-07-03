import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";
import Navigation from "./layouts/Navigation";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container style={{ marginTop: "0.5em" }} className="main">
        <Dashboard />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
