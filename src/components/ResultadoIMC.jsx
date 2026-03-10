function ResultadoIMC({ nombre, peso, altura }) {
  const imc = peso / (altura * altura);

  let diagnostico = "";
  let diagColor = "";

  if (imc < 18.5) {
    diagnostico = "Bajo peso";
    diagColor = "#3182ce";
  } else if (imc < 25) {
    diagnostico = "Peso normal";
    diagColor = "#38a169";
  } else if (imc < 30) {
    diagnostico = "Sobrepeso";
    diagColor = "#d69e2e";
  } else {
    diagnostico = "Obesidad";
    diagColor = "#e53e3e";
  }

  return (
    <div className="tarjeta-imc" style={{ borderColor: diagColor }}>
      <h3>{nombre}</h3>
      <p className="datos-persona">
        Peso: <b>{peso} kg</b> | Altura: <b>{altura} m</b>
      </p>
      <div className="valor-imc" style={{ color: diagColor }}>
        {imc.toFixed(1)}
      </div>
      <div className="label-imc">IMC</div>
      <div className="diagnostico" style={{ background: diagColor }}>
        {diagnostico}
      </div>
    </div>
  );
}

export default ResultadoIMC;