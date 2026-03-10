function TarjetaContacto({ nombre, telefono, correo, ciudad, ocupacion, color }) {
  return (
    <div className="tarjeta-contacto" style={{ background: color || "#fff" }}>
      <h3>{nombre}</h3>
      <p className="ocupacion">{ocupacion}</p>
      <hr />
      <div className="datos">
        <span>{telefono}</span>
        <span>{correo}</span>
        <span>{ciudad}</span>
      </div>
    </div>
  );
}

export default TarjetaContacto;