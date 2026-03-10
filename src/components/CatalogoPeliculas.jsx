import TarjetaPelicula from './TarjetaPelicula';

function CatalogoPeliculas({ peliculas }) {
  return (
    <div>
      <h2 className="seccion-titulo"> Mi Catalogo de Peliculas</h2>

      
      <div className="grid-peliculas">
        {peliculas.map(pelicula => (
          <TarjetaPelicula
            key={pelicula.id}
            titulo={pelicula.titulo}
            director={pelicula.director}
            anio={pelicula.anio}
            genero={pelicula.genero}
            calificacion={pelicula.calificacion}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogoPeliculas;