const pw = document.getElementById("pw");
const copy = document.getElementById("copy");
const length = document.getElementById("pw-length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = length.value;

  let password = "";

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pw.innerText = password;
}

function generateX() {
  const options = [];
  if (upper.checked) {
    options.push(getUppercase());
  }

  if (lower.checked) {
    options.push(getLowercase());
  }

  if (number.checked) {
    options.push(getNumber());
  }

  if (symbol.checked) {
    options.push(getSymbol());
  }

  if (options.length === 0) return "";

  return options[Math.floor(Math.random() * options.length)];
}

generate.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pw.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
