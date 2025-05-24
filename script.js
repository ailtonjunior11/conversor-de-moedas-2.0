// Aqui criamos uma variável para mapear o botão de conversão
const convertButton = document.querySelector(".convert-button");
// Aqui criamos uma variável para mapear o select de moedas convertidas
const currencySelect = document.querySelector(".currency-select");
// Aqui criamos uma variável para mapear o select de moedas a serem convertidas
const currencySelectToConvert = document.querySelector(
  ".currency-select-to-convert"
);

// Aqui criamos uma função para converter o valor do input para o valor convertido
function convertValues() {
  // Aqui criamos uma variável para guardar o valor do input
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  // Aqui criamos uma variável para mapear o paragrafo que vai receber o valor a ser convertido
  const CurrencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  // Aqui criamos uma variável para mapear o paragrafo que vai receber o valor convertido
  const CurrencyValueConverted = document.querySelector(".currency-value");

  // Aqui criamos um objeto com as variáveis que guardam as taxas de câmbio de cada moeda
  const exchangeRates = {
    dolar: 5.2,
    real: 1,
    euro: 6.2,
    libra: 7.2,
    bitcoin: 637.455,
    francosuico: 6.9,
  };

  // Aqui criamos uma variável para guardar a moeda de origem
  const sourceCurrency = currencySelectToConvert.value;
  // Aqui criamos uma variável para guardar a moeda de destino
  const destinationCurrency = currencySelect.value;

  // Aqui criamos uma variável para guardar a taxa de câmbio da moeda de origem
  const originationFees = exchangeRates[sourceCurrency];
  // Aqui criamos uma variável para guardar a taxa de câmbio da moeda de destino
  const destinationFees = exchangeRates[destinationCurrency];

  // Aqui criamos uma variável para guardar o valor do input multiplicado pela taxa de câmbio da moeda de origem e dividido pela taxa de câmbio da moeda de destino
  const valueConverted =
    (inputCurrencyValue * originationFees) / destinationFees; // Exemplo: 100 * 5.2 / 6.2 = 83.87

  // Aqui formatamos o valor que será convertido
  CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: getCurrencyCode(sourceCurrency),
  }).format(inputCurrencyValue);

  // Aqui formatamos o valor convertido
  CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: getCurrencyCode(destinationCurrency),
  }).format(valueConverted);
}

// Aqui criamos uma função auxiliar para pegar o código da moeda
function getCurrencyCode(moeda) {
  const currencyCode = {
    dolar: "USD",
    real: "BRL",
    euro: "EUR",
    libra: "GBP",
    bitcoin: "BTC",
    francosuico: "CHF",
  };

  return currencyCode[moeda]; // Aqui retornamos o codigo da moeda
}

// Aqui criamos uma função para o select, mudando o nome e a imagem da moeda que será convertida
function changeCurrency() {
  const currencyName = document.getElementById("currency-name"); // Aqui criamos uma variável para mapear o nome da moeda convertida
  const currencyImage = document.querySelector(".currency-img"); // Aqui criamos uma variável para mapear a imagem da moeda convertida

  // Aqui criamos uma verificação para saber qual moeda está sendo selecionada, depois trocamos o nome e a imagem da moeda
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./assets/real.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  if (currencySelect.value == "francosuico") {
    currencyName.innerHTML = "Franco Suiço";
    currencyImage.src = "./assets/franco.png";
  }

  convertValues(); // Aqui chamamos a função de conversão
}

// Aqui criamos uma função para o select, mudando o nome e a imagem da moeda a ser convertida
function changeCurrencyToConvert() {
  const currencyNameToConvert = document.getElementById(
    "currency-name-to-convert" // Aqui criamos uma variável para mapear o nome da moeda convertida
  );
  const currencyImageToConvert = document.querySelector(
    ".currency-image-to-convert"
  ); // Aqui criamos uma variável para mapear a imagem da moeda convertida

  if (currencySelectToConvert.value == "real") {
    currencyNameToConvert.innerHTML = "Real";
    currencyImageToConvert.src = "./assets/real.png";
  }

  if (currencySelectToConvert.value == "dolar") {
    currencyNameToConvert.innerHTML = "Dólar Americano";
    currencyImageToConvert.src = "./assets/dolar.png";
  }

  if (currencySelectToConvert.value == "euro") {
    currencyNameToConvert.innerHTML = "Euro";
    currencyImageToConvert.src = "./assets/euro.png";
  }

  if (currencySelectToConvert.value == "libra") {
    currencyNameToConvert.innerHTML = "Libra";
    currencyImageToConvert.src = "./assets/libra.png";
  }

  if (currencySelectToConvert.value == "bitcoin") {
    currencyNameToConvert.innerHTML = "Bitcoin";
    currencyImageToConvert.src = "./assets/bitcoin.png";
  }

  if (currencySelectToConvert.value == "francosuico") {
    currencyNameToConvert.innerHTML = "Franco Suiço";
    currencyImageToConvert.src = "./assets/franco.png";
  }

  convertValues(); // Aqui chamamos a função de conversão
}

currencySelectToConvert.addEventListener("change", changeCurrencyToConvert); // Aqui adicionamos o evento de mudança no select
currencySelect.addEventListener("change", changeCurrency); // Aqui adicionamos o evento de mudança no select
convertButton.addEventListener("click", convertValues); // Aqui adicionamos o evento de clique no botão de conversão
