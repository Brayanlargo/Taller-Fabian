function TarjetaPelicula({ titulo, director, anio, genero, calificacion }) {
  let etiqueta = "Regular";
  let etiquetaColor = "#e53e3e";

  if (calificacion >= 4.5) {
    etiqueta = "Excelente";
    etiquetaColor = "#38a169";
  } else if (calificacion >= 3.5) {
    etiqueta = "Buena";
    etiquetaColor = "#d69e2e";
  }

  return (
    <div className="tarjeta-pelicula">
      <h3>{titulo}</h3>
      <p className="director">{director} · {anio}</p>
      <span className="genero">{genero}</span>
      <div className="calificacion" style={{ color: etiquetaColor }}>
        {etiqueta} ({calificacion})
      </div>
    </div>
  );
}

export default TarjetaPelicula;