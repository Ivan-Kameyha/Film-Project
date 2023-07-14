import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../estilos/Crear.css"

function Crear() {

    const [nombrePelicula, setNombrePelicula] = useState("");
    const [genero, setGenero] = useState("");
    const [duracion, setDuracion] = useState("");
    const [clasificacion, setClasificacion] = useState("");
    const [poster, setPoster] = useState("");
    const [portada, setPortada] = useState("");
    const [trailer, setTrailer] = useState("");
    const [sinopsis, setSinopsis] = useState("");

    const postData = () => {
        axios.post("http://localhost:4000/api/peliculas", { 
            nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis 
        })
    }

    if (poster === "") {
        setPoster("https://media.istockphoto.com/id/1065406736/es/vector/cartel-festival-retro-cine-videoc%C3%A1mara-vintage.jpg?s=612x612&w=0&k=20&c=nL0cF9xxgkGbKZo1ikF2m3fu1mvTgBlzXrFMOJV4gSg=")
    }

    if (portada === "") {
        setPortada("https://www.blogodisea.com/wp-content/uploads/2021/06/peliculas.jpg");
    }

    if (trailer ==="") {
        setTrailer("https://www.youtube.com/embed/lrf-GAYUOkQ");
    }

    return (
        <div className="contenedor-crear">
            <h1 className="titulo-registrar">Registrar nueva película</h1>

            <div className="campos-registrar">
                <div className="primer-campo">
                    <label>Título:</label><br />
                    <input onChange={(e) => setNombrePelicula(e.target.value)} /><br />

                    <label>Género:</label><br />
                    <input onChange={(e) => setGenero(e.target.value)} /><br />

                    <label>Duración:</label><br />
                    <input onChange={(e) => setDuracion(e.target.value)} /><br />

                    <label>Clasificación (edad):</label><br />
                    <input onChange={(e) => setClasificacion(e.target.value)} /><br />
                </div>

                <div className="segundo-campo">
                    <label>Poster (url):</label><br />
                    <input onChange={(e) => setPoster(e.target.value)} /><br />

                    <label>Portada (url):</label><br />
                    <input onChange={(e) => setPortada(e.target.value)} /><br />

                    <label>Trailer (url):</label><br />
                    <input onChange={(e) => setTrailer(e.target.value)} /><br />

                    <img className="portada-crear" src={portada}/>

                    <iframe className="trailer-crear" width="200px" height="100px" src={trailer + "?autoplay=1&mute=1&controls=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <img className="poster-crear" src={poster}></img>
            </div>

            <label>Sinopsis:</label>
            <textarea name="sinopsis" rows="5" cols="33" onChange={(e) => setSinopsis(e.target.value)}>
                Escribir aquí la trama de la película...
            </textarea>

            <Link to="/"><button className="btn btn-outline-info btn-sm" onClick={postData}>Agregar a cartelera</button></Link>
            <Link to="/"><button className="btn btn-outline-light btn-sm">Volver</button></Link>
        </div>
    );
}

export default Crear;