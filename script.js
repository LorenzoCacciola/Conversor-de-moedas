const dolar = document.querySelector(".dolar");
const euro = document.querySelector(".euro");
const libra = document.querySelector(".libra");

document.querySelector(".btn").addEventListener("click", function () {
  const res = document.querySelector(".res");
  let valorReal = document.querySelector(".valor-cambio").value;

  if (valorReal <= 0 || null) {
    alert("ERRO NUMERO INVALIDO!!");
  }

  let selected = document.querySelector('input[type="radio"]:checked');

  if (selected == dolar) {
    const dolarConvert = Number(valorReal) * 5.92;

    res.textContent = dolarConvert.toFixed(2);
  }

  if (selected == euro) {
    const euroConvert = Number(valorReal) * 4.96;

    res.textContent = euroConvert.toFixed(2);
  }

  if (selected == libra) {
    const libraConvert = Number(valorReal) * 6.92;

    res.textContent = libraConvert.toFixed(2);
  }
});
