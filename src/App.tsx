import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home, Bakery, About } from "./pages";
import { Navbar } from "./components";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState('#f7f1ee');
  return (
    <ShoppingCartProvider>
      <div style={{backgroundColor: bgColor, fontFamily: "Roboto Mono, monospace"}}>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      </div>
      
    </ShoppingCartProvider>
  );
}

export default App;
