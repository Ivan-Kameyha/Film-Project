import { getConnection } from "../database/database";

const getPeliculas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis, id FROM peliculas");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getOnePelicula = async (req, res) => {
    try {
        console.log(req.params); // envia datos mediante parametros en la url
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis, id FROM peliculas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addPelicula = async (req, res) => {
    try {
        const { nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis } = req.body;

        if (nombrePelicula === undefined || genero === undefined || duracion === undefined || clasificacion === undefined || poster === undefined || portada === undefined || trailer === undefined || sinopsis === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field."});
        }

        const pelicula = { nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis };
        const connection = await getConnection();
        await connection.query("INSERT INTO peliculas SET ?", pelicula);
        res.json({ message: "Peliculas Added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatePelicula = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const { nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis } = req.body;

        if (id === undefined || nombrePelicula === undefined || genero === undefined || duracion === undefined || clasificacion === undefined || poster === undefined || portada === undefined || trailer === undefined || sinopsis === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field."});
        }

        const pelicula = { nombrePelicula, genero, duracion, clasificacion, poster, portada, trailer, sinopsis };

        const connection = await getConnection();
        const result = await connection.query("UPDATE peliculas SET ? WHERE id = ?", [pelicula, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletePelicula = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM peliculas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getPeliculas,
    getOnePelicula,
    addPelicula,
    updatePelicula,
    deletePelicula
};