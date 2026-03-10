import './App.css';

import TarjetaContacto from './components/tarjetacontacto';
import CatalogoPeliculas from './components/CatalogoPeliculas';
import ResultadoIMC from './components/ResultadoIMC';

function App() {

  const peliculas = [
    { id: 1, titulo: "Rapidos y Fuiriosos 1", director: "Rob Cohen", anio: 2001, genero: "Accion ", calificacion: 4.0 },
    { id: 2, titulo: "Rapidos y Furiosos Reto Tokio", director: "Justin Lin", anio: 2006, genero: "Accion", calificacion: 4.6 },
    { id: 3, titulo: "Coco", director: "Lee Unkrich", anio: 2017, genero: "Animacion", calificacion: 3.5},
    { id: 4, titulo: "lucas", director: "Enrico Casarosa", anio: 2021, genero: "Animacion", calificacion: 3.0 },
    { id: 5, titulo: "La Purga ", director: "James Demonaco", anio: 2013, genero: "Terror", calificacion: 1.5 },
  ];

  const personas = [
    { id: 1, nombre: "Fabian Maceto", peso: 50, altura: 1.72 },
    { id: 2, nombre: "Nataly Huertas", peso: 55, altura: 1.68 },
    { id: 3, nombre: "Claudia Huertas", peso: 95, altura: 1.47 },
    { id: 4, nombre: "Angel Maceto", peso: 80, altura: 1.70 },
  ];

  return (
    <div className="app">

      <div className="app-header">
        <img src="/nacional.png" alt="Atletico Nacional" className="header-img" />
        <h1>Taller React — Componentes y JSX</h1>
        <p>Construccion de Aplicaciones Web · UNIAGUSTINIANA</p>
      </div>

      <div className="seccion">
        <h2 className="seccion-titulo">Tarjetas de Contacto</h2>
        <div className="grid-contactos">
          <TarjetaContacto nombre="Nataly Maceto" telefono="3002495566" correo="nata@gmail.com" ciudad="Bogota" ocupacion="Desarrolladora Frontend" color="#e6f2ec" />
          <TarjetaContacto nombre="Claudia Huertas " telefono="3109000578" correo="claudis@outlook.com" ciudad="Medellin" ocupacion="Diseñador UX" color="#f0f7f3" />
          <TarjetaContacto nombre="Angel Maceto" telefono="3207666664" correo="angelm@empresa.co" ciudad="Cali" ocupacion="Ingeniera de Datos" color="#ffffff" />
        </div>
      </div>

      <div className="seccion">
        <CatalogoPeliculas peliculas={peliculas} />
      </div>

      <div className="seccion">
        <h2 className="seccion-titulo">Calculadora de IMC</h2>
        <div className="grid-imc">
          {personas.map(p => (
            <ResultadoIMC key={p.id} nombre={p.nombre} peso={p.peso} altura={p.altura} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;