const texto = document.getElementById("texto");
res = document.querySelector(".container-msj");
enc = document.getElementById("encriptar");
des = document.getElementById("desencriptar");

const removeChild = () => {
  res.classList.add("flex-bt");
  res.querySelectorAll("section").forEach((e) => res.removeChild(e));
};

const createCopy = (value) => {
  if (!document.querySelector(".copy")) {
    removeChild();
    res.insertAdjacentHTML(
      "beforeend",
      `<p>${value}</p><button class="copy">Copiar</button>`
    );
  } else {
    res.querySelector("p").textContent = value;
  }
};

const vocales = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const eval = (func) => {
  if (/^[a-z\s.]+$/.test(texto.value)) createCopy(func(texto.value));
  else {
    alert("Ingresa letras minusculas y sin acento");
  }
};

const encriptar = (texto = "") =>
  texto
    .split("")
    .map((e) => (vocales.hasOwnProperty(e) ? vocales[e] : e))
    .join("");

const desencriptar = (texto = "") => {
  Object.entries(vocales).forEach(
    ([key, value]) => (texto = texto.replaceAll(value, key))
  );
  return texto;
};

document.addEventListener("click", (e) => {
  if (e.target === enc) {
    eval(encriptar);
  }

  if (e.target === des) {
    eval(desencriptar);
  }

  if (e.target.matches(".copy")) {
    navigator.clipboard.writeText(res.querySelector("p").textContent);
  }
});
