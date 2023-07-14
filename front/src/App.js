import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listar from "./components/Listar";
import Crear from "./components/Crear";
import Editar from "./components/Editar";
import Navegacion from "./components/Navegacion";
import Detalles from "./components/Detalles";

function App() {
  return (
    <div className='app-contenedor'>
      <BrowserRouter>

        {<Navegacion />}

        <Routes>
          <Route exact path="/" element={<Listar />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/detalles" element={<Detalles />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
