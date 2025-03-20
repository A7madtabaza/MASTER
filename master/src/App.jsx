
import './App.css'
import Nav from "./components/nav"

import Footer from "./components/footer"
import About from "./components/About"

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './components/Home';
function App() {


  return (
    <main className=" p-4 text-gray-400">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </main>
  );
}

export default App
