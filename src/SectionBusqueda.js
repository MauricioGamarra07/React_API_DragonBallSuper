import React from 'react'
import './css/style.css'

function SectionBusqueda({ data }) {

  const input = document.querySelector(".txtNombre");
  const universo = document.querySelector(".nombre-universo");
  const contenedorPersonajes = document.querySelector(".section-personajes");


  const buscarNombre = (nombre, data) => {
    console.log("Buscar nombre: " + nombre);
    /* console.log(data); */

    let personaje = data.find(pers => pers.name == nombre);
    console.log(personaje);

    if (personaje !== undefined) {
      console.log("Todo salió bien");

      contenedorPersonajes.innerHTML = "";
      const div = document.createElement('div');
      div.classList.add('card');
      div.classList.add('card-personaje');
      div.innerHTML = `
            <img src="${personaje.imageUrl}" class="card-img-top">
            <div class="card-body">
                <h3 class="text-center">Nombre: ${personaje.name}</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Especie: ${personaje.specie}</li>
            <li class="list-group-item">Tipo: ${personaje.role}</li>
            <li class="list-group-item">Universo: ${personaje.universe}</li>
            </ul>
       `;
      contenedorPersonajes.appendChild(div);
    }
    else {
      alert("El personaje especificado no existe");

      contenedorPersonajes.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('card-personaje');
        div.innerHTML = `
                <img src="${data[i].imageUrl}" class="card-img-top">
                <div class="card-body">
                    <h3 class="text-center">Nombre: ${data[i].name}</h3>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Especie: ${data[i].specie}</li>
                <li class="list-group-item">Tipo: ${data[i].role}</li>
                <li class="list-group-item">Universo: ${data[i].universe}</li>
                </ul>
           `;
        contenedorPersonajes.appendChild(div);
      }
    }

  }






  const buscarporUniverso = (universo, data) => {

    console.log(universo);

    let id = "0";

    switch (universo) {
      case "Universo 1":
        id = "1";
        break;
      case "Universo 2":
        id = "2";
        break;
      case "Universo 3":
        id = "3";
        break;
      case "Universo 4":
        id = "4";
        break;
      case "Universo 5":
        id = "5";
        break;
      case "Universo 6":
        id = "6";
        break;
      case "Universo 7":
        id = "7";
        break;
      case "Universo 8":
        id = "8";
        break;
      case "Universo 9":
        id = "9";
        break;
      case "Universo 10":
        id = "10";
        break;
      case "Universo 11":
        id = "11";
        break;
      case "Universo 12":
        id = "12";
        break;
      default:
        id = "0";
        break;
    }
    console.log("Id de Universo: " + id);

    contenedorPersonajes.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].universe == id) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('card-personaje');
        div.innerHTML = `
                <img src="${data[i].imageUrl}" class="card-img-top">
                <div class="card-body">
                    <h3 class="text-center">Nombre: ${data[i].name}</h3>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Especie: ${data[i].specie}</li>
                <li class="list-group-item">Tipo: ${data[i].role}</li>
                <li class="list-group-item">Universo: ${data[i].universe}</li>
                </ul>
           `;
        contenedorPersonajes.appendChild(div);
      }

    }

  }


  return (
    <div>
      <h1 className="text-center p-3 text-warning">Personajes de Dragon Ball Super</h1>

      <div className="busqueda">
        <div className="buscar">
          <input type="text" placeholder="Buscar por Nombre de Personaje" className="txtNombre" />
          <i className="bx bx-search-alt-2 bx-md icono-buscar" onClick={() => {
            buscarNombre(input.value, data)
          }}></i>
        </div>

        <div className="cboUniverso">
          <select className="nombre-universo" onClick={() => {
            buscarporUniverso(universo.value, data)
          }}>
            <option>Seleccione un Universo</option>
            <option>Universo 1</option>
            <option>Universo 2</option>
            <option>Universo 3</option>
            <option>Universo 4</option>
            <option>Universo 5</option>
            <option>Universo 6</option>
            <option>Universo 7</option>
            <option>Universo 8</option>
            <option>Universo 9</option>
            <option>Universo 10</option>
            <option>Universo 11</option>
            <option>Universo 12</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SectionBusqueda