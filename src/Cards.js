import React from 'react'
import './css/style.css'

function Cards({ data }) {
    return (
        <div className="section-personajes">
            {
                data.map((item, index) => (
                    <div className='card card-personaje' key={index}>
                        <img src={item.imageUrl} alt="" />
                        <div className="card-body">
                            <h3 className="text-center">Nombre: {item.name}</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Especie: {item.specie}</li>
                            <li className="list-group-item">Rol: {item.role}</li>
                            <li className="list-group-item">Universo: {item.universe}</li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards