import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
// Import BrowserRouter
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div style={{ width: '100%', height: '75px', backgroundColor: 'black'}}>
            <h1 style={{ color: 'white', }}>Welcome to React Router</h1>
        </div>
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route exact path="/"element={<Home />} />
          <Route path="/about"element={<About />} />
          <Route path="/contact"element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
