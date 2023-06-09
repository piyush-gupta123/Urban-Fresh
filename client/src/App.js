import React from "react"; 
import Header from "./Components/Header";
import { Routes,Route } from "react-router-dom"
import Home from "./Components/Home"


function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </section>
    </div>
  );
}

export default App;
