import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BarraNavegacion } from "./componentes/barranavegacion";
import { Busqueda } from "./paginas/busqueda/busqueda";
import { Chat } from "./paginas/chat/chat";
import { HomePage } from "./paginas/homepage/homepage";
import { IniciarSesion } from "./paginas/iniciarsesion/iniciarsesion";
import { Notificaciones } from "./paginas/notificaciones/notificaciones";
import { Registrar } from "./paginas/registrar/registrar";
import { BandejaEntrada } from "./paginas/bandejaentrada/bandejaentrada";

function App() {
  return (
    <div className="App">
      <Router>
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bandejaentrada" element={<BandejaEntrada />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
