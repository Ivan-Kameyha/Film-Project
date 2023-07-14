import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../estilos/Listar.css"
import slider1 from "../imagenes/slider1.png"
import slider2 from "../imagenes/slider2.jpg"
import slider3 from "../imagenes/slider3.jpg"
import slider4 from "../imagenes/slider4.jpg"

function Listar() {

  const [datos, setDatos] = React.useState([]);

  React.useEffect(() => {
    obtenerDatos();
  }, [])

  const obtenerDatos = async () => {
    const url = "http://localhost:4000/api/peliculas";
    const resultado = await axios.get(url);

    // console.log(resultado.data);

    setDatos(resultado.data)
  }

  function setDataLocalStorage(item) {
    let { id, nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis } = item;
    localStorage.setItem("ID", id);
    localStorage.setItem("NombrePelicula", nombrePelicula);
    localStorage.setItem("Genero", genero);
    localStorage.setItem("Duracion", duracion);
    localStorage.setItem("Clasificacion", clasificacion);
    localStorage.setItem("Poster", poster);
    localStorage.setItem("Portada", portada);
    localStorage.setItem("Trailer", trailer);
    localStorage.setItem("Sinopsis", sinopsis);
  }

  function borrarDatos(id) {
    axios.delete(`http://localhost:4000/api/peliculas/${id}`).then(() => {
      obtenerDatos();
    })
    alert("Datos borrados correctamente.")
  }

  function acortarSinopsis(sinopsis) {
    let sinop = String(sinopsis).substring(0, 100)

    return sinop + "..."
  }

  return (

    <div className="contenedor-listar">

      <div className='contenedor-sliders'>
        <div className="ruleta-sliders">
          <img className='sliders' src={slider1}></img>
          <img className='sliders' src={slider2}></img>
          <img className='sliders' src={slider3}></img>
          <img className='sliders' src={slider4}></img>
        </div>
      </div>

      <hr></hr>

      <h1 id='tituloCartelera'>Cartelera <a className='flechaCartelera' href='#tituloCartelera'><i className="fa-solid fa-chevron-down"></i></a></h1>

      <div className="contenedor-posters-sucursales">
        <div className="contenedor-posters">
          {
            datos.map(item => (
              <div key={item.id}>
                <div className="posters">
                  <a href="detalles"><img src={item.poster} className="posters_img" onClick={() => setDataLocalStorage(item)}></img></a>
                  <div className="info">
                    <div className="titulo-pelicula">
                      {item.nombrePelicula}
                    </div>
                    <div className="clasificacion-duracion">
                      <div className="clasificacion">{item.clasificacion}</div>
                      <div className="duracion">{item.duracion}</div>
                    </div>
                    <div className="descripcion">
                      {acortarSinopsis(item.sinopsis)}
                    </div>
                    <div className="genero">
                      Género: {item.genero}
                    </div>
                  </div>
                </div>
                <p className="titulos">{item.nombrePelicula}</p>
                <Link to="/editar"><button className="btn btn-outline-warning btn-sm" onClick={() => setDataLocalStorage(item)}>Editar</button></Link>
                <button className="btn btn-outline-danger btn-sm" onClick={() => borrarDatos(item.id)}>Eliminar</button>
              </div>
            ))
          }
        </div>
        <div className="contenedor-sucursales">
          <h4>Sucursales</h4>
          <ul>
            <li>Cine Plus - Tucumán</li>
            <li>Cine Plus - Catamarca</li>
            <li>Cine Plus - Córdoba</li>
            <li>Cine Plus - Mendoza</li>
          </ul>
          <hr></hr>
          <h4>Promociones</h4>
          <p>Lunes/Martes/Miercoles</p>
          <p>Entrada 2D $800 <br></br> Promo 2 x $1200</p>
          <p>Entrada 3D $1000 <br></br> Promo 2 x $1500</p>
          <hr></hr>
          <h4>Próximos estrenos</h4>
          <img src="https://areajugones.sport.es/wp-content/uploads/2022/01/jumanji-4.jpeg" width="50px"></img>
          Jumanji 4 <br></br>
          <img src="https://m.cinesargentinos.com.ar/poster/9292-el-aro-4.jpg?1671824848" width="50px"></img>
          El aro 4
        </div>
      </div>
    </div>
  )
}

export default Listar;