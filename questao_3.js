const dados = require("./dados.json");

function menorFaturamento(dados) {
  const diasComFaturamento = dados.filter((dia) => dia.valor > 0);
  return Math.min(...diasComFaturamento.map((dia) => dia.valor));
}

function maiorFaturamento(dados) {
  const diasComFaturamento = dados.filter((dia) => dia.valor > 0);
  return Math.max(...diasComFaturamento.map((dia) => dia.valor));
}

function mediaMensal(dados) {
  const diasComFaturamento = dados.filter((dia) => dia.valor > 0);
  const somaTotal = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
  return somaTotal / diasComFaturamento.length;
}

function diasAcimaMedia(dados) {
  const media = mediaMensal(dados);
  return dados.filter((dia) => dia.valor > media).length;
}

const menorValor = menorFaturamento(dados);
const maiorValor = maiorFaturamento(dados);
const diasAcimaDaMedia = diasAcimaMedia(dados);

console.log("--- Análise de Faturamento Mensal ---");
console.log(
  `Menor valor de faturamento: ${menorValor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);
console.log(
  `Maior valor de faturamento: ${maiorValor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);
console.log(
  `Número de dias com faturamento superior à média: ${diasAcimaDaMedia} dias`
);
console.log("------------------------------------");
