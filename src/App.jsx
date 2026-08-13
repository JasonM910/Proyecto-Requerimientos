import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Quote from "./pages/Quote";

function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/:id" element={<ServiceDetail />} />
        <Route path="/cotizacion" element={<Quote />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;