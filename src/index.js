import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Cards";
import SectionBusqueda from "./SectionBusqueda";

const root = ReactDOM.createRoot(document.getElementById("root"));

function TraerDatos() {

    const [personajes, setPersonajes] = useState([]);

    const fetchPersonajes = () => {
        let peticion = fetch("https://dragon-ball-super-api.herokuapp.com/api/characters");
        peticion
            .then(res => res.json())
            .then((resultado) => setPersonajes(resultado))
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        fetchPersonajes();
    }, []);

    return (
        <>
            <SectionBusqueda data={personajes} />
            
            <Cards data={personajes} />
        </>
    );

}

root.render(
    <div >
        <TraerDatos />
    </div>
);

export default TraerDatos