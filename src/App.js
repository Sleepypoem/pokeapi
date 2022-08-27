import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./sections/Home";
import NavBar from './sections/NavBar';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
