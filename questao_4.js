const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularTotalFaturamento(faturamentoPorEstado) {
  return Object.values(faturamentoPorEstado).reduce(
    (total, valor) => total + valor,
    0
  );
}

function calcularPercentuais(faturamentoPorEstado) {
  const total = calcularTotalFaturamento(faturamentoPorEstado);
  const percentuais = {};
  for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
    percentuais[estado] = (valor / total) * 100;
  }
  return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);

console.log("--- Percentual de Representação por Estado ---");
for (const [estado, percentual] of Object.entries(percentuais)) {
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
console.log("------------------------------------");
