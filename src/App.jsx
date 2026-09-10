import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Quote from "./pages/Quote";

// Componente para reiniciar el scroll arriba al cambiar de vista
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <ScrollToTop />

            <NavigationBar />

            <div className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Services />} />
                    <Route path="/servicios/:id" element={<ServiceDetail />} />
                    <Route path="/cotizacion" element={<Quote />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;