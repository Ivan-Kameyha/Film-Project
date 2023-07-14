import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

function Editar() {

    const [id, setID] = useState("")
    const [nombrePelicula, setNombrePelicula] = useState("")
    const [genero, setGenero] = useState("")
    const [duracion, setDuracion] = useState("")
    const [clasificacion, setClasificacion] = useState("")
    const [poster, setPoster] = useState("")
    const [portada, setPortada] = useState("")
    const [trailer, setTrailer] = useState("")
    const [sinopsis, setSinopsis] = useState("")

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setNombrePelicula(localStorage.getItem("NombrePelicula"))
        setGenero(localStorage.getItem("Genero"))
        setDuracion(localStorage.getItem("Duracion"))
        setClasificacion(localStorage.getItem("Clasificacion"))
        setPoster(localStorage.getItem("Poster"))
        setPortada(localStorage.getItem("Portada"))
        setTrailer(localStorage.getItem("Trailer"))
        setSinopsis(localStorage.getItem("Sinopsis"))
    }, [])

    function updateAPIData() {
        axios.put(`http://localhost:4000/api/peliculas/${id}`, {
            nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis
        })
        alert("Datos modificados correctamente.");
    }

    return (
        <div className="contenedor-crear">
            <h1 className="titulo-registrar">Modificar película</h1>

            <div className="campos-registrar">
                <div className='primer-campo'>
                    <label>Título:</label><br />
                    <input value={nombrePelicula} onChange={(e) => setNombrePelicula(e.target.value)} /><br />

                    <label>Género:</label><br />
                    <input value={genero} onChange={(e) => setGenero(e.target.value)} /><br />

                    <label>Duracion:</label><br />
                    <input value={duracion} onChange={(e) => setDuracion(e.target.value)} /><br />

                    <label>Clasificación (edad):</label><br />
                    <input value={clasificacion} onChange={(e) => setClasificacion(e.target.value)} /><br />
                </div>
                <div className='segundo-campo'>
                    <label>Porter (url):</label><br />
                    <input value={poster} onChange={(e) => setPoster(e.target.value)} /><br />

                    <label>Portada (url):</label><br />
                    <input value={portada} onChange={(e) => setPortada(e.target.value)} /><br />

                    <label>Trailer (url):</label><br />
                    <input value={trailer} onChange={(e) => setTrailer(e.target.value)} /><br />

                    <img className="portada-crear" src={portada}/>

                    <iframe className="trailer-crear" width="200px" height="100px" src={trailer + "?autoplay=1&mute=1&controls=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <img className="poster-crear" src={poster}></img>
            </div>

            <label>Sinopsis:</label>
            <textarea value={sinopsis} name="sinopsis" rows="5" cols="33" onChange={(e) => setSinopsis(e.target.value)}></textarea>

            <Link to="/"><button className="btn btn-outline-info btn-sm" onClick={updateAPIData}>Modificar</button></Link>
            <Link to="/"><button className="btn btn-outline-light btn-sm">Cancelar</button></Link>
        </div>
    );
}

export default Editar