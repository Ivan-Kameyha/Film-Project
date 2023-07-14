import React, { useEffect, useState } from 'react'
import "../estilos/Detalles.css";
import tarjetas from "../imagenes/tarjetas.jpeg"

function Detalles() {

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

    function abrirVentanaModal() {
        const modal_Container = document.getElementById('modalContainer');
        modal_Container.classList.add('show');
    }

    function cerrarVentanaModal() {
        const modal_Container = document.getElementById('modalContainer');
        modal_Container.classList.remove('show');
    }

    function continuarCompra() {
        alert("El servidor se encuentra en mantenimiento, reintente mas tarde.");
        console.log("hola")
    }

    return (
        <div className="contenedor-detalles">
            <div className='fondo'>
                <img src={portada} width="100%" className='portada'></img>
            </div>

            <div className='info-detalles'>
                <div className='informacion1'>
                    <img src={poster} className="poster-detalles"></img>
                    <a href='#trailer'><button id='btn-trailer' title="Ver trailer"><i className="fa-solid fa-play"></i></button></a>
                    <button id='btn-entradas' className="btn btn-info" onClick={() => abrirVentanaModal()}>Comprar entrada</button>
                    <a href='/'><button id='btn-volver' className="btn btn-outline-light btn-sm">Volver a cartelera</button></a>
                </div>
                <div className='informacion2'>
                    <h3>{nombrePelicula}</h3>
                    <div>{sinopsis}</div><br></br>
                    <div>Género: {genero}</div>
                    <div>Duración: {duracion}</div>
                    <div>Clasificación: {clasificacion}</div>
                </div>
                <div className="modal-container" id="modalContainer">

                    <div className="row-acomodar">
                        <h3 className="text-white">Detalles del pago</h3>
                        <p>Tarjetas aceptadas:</p>
                        <img src={tarjetas} alt="" width="450px" />
                        <p>Número de tarjeta: </p>
                        <input type="text" value="0000 0000 0000" />
                        <p>Cantidad de entradas: </p>
                        <input type="number" min="1" placeholder="1" className='inputCantEntradas' />
                        <br />
                        <br />

                        <button className="btn btn-outline-info btn-sm" id="btnContinuar" onClick={() => continuarCompra()}>Continuar</button>
                        <button className="btn btn-outline-light btn-sm" id="btnCancelar" onClick={() => cerrarVentanaModal()}>Cancelar</button>
                    </div>

                </div>
            </div>
            <iframe id='trailer' className='trailer' width="560" height="315" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default Detalles;