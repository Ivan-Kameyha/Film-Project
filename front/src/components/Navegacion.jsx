import { Link } from "react-router-dom";
import logoPlus from "../imagenes/logoPlus.png";
import "../estilos/Navegacion.css";

function Navegacion() {
    return (
        <nav className="nav-contenedor fixed-top">
            <div className="seccion1">
                <a href="#" className='nav-logo'><img src={logoPlus} width="120px"></img></a>
                <Link to="/crear" className='nav-agregar'>Agregar</Link>
            </div>
            <div className="seccion2">
                <a href="#" className="nav-redes"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="nav-redes"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="nav-redes"><i className="fa-brands fa-instagram"></i></a>
            </div>

        </nav>
    )
}

export default Navegacion;