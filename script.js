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

  const dolarToDay = 5.2;
  const realToDay = 1;
  const euroToDay = 6.2;
  const libraToDay = 7.2;
  const bitcoinDay = 637.455;
  const francoSuicoToDay = 6.9;

  // Aqui fazemos uma verificação do segundo select, para saber qual moeda está sendo selecionada, e depois fazemos a conversão
  if (currencySelect.value == "dolar") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToDay);
  }

  if (currencySelect.value == "real") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / realToDay);
  }

  if (currencySelect.value == "euro") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToDay);
  }

  if (currencySelect.value == "libra") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToDay);
  }

  if (currencySelect.value == "bitcoin") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinDay);
  }

  if (currencySelect.value == "francosuico") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-CH", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue / francoSuicoToDay);
  }

  // Aqui fazemos uma verificação do primeiro select, para saber qual moeda está sendo selecionada, e depois fazemos a conversão
  if (currencySelectToConvert.value == "real") {
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  } // Aqui estamos mudando o valor do input para o formato de moeda brasileira

  if (currencySelectToConvert.value == "dolar") {
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  } // Aqui estamos mudando o valor do input para o formato de moeda americana

  if (currencySelectToConvert.value == "libra") {
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  } // Aqui estamos mudando o valor do input para o formato de moeda britânica

  if (currencySelectToConvert.value == "euro") {
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  } // Aqui estamos mudando o valor do input para o formato de moeda europeia

  if (currencySelectToConvert.value == "bitcoin") {
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("es-SV", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue);
  }

  if (currencySelectToConvert.value == "francosuico") {
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue);
  }
}

// Aqui criamos uma função para mudar o nome e a imagem da moeda selecionada
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

// Aqui criamos uma função para mudar o nome e a imagem da moeda selecionada
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
