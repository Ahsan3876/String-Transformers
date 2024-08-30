const input = document.querySelector(".input");
const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#uppercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");

function updatedScreen() {
  lowerCaseOutput.innerText = input.value.trim().toLowerCase();
  upperCaseOutput.innerText = input.value.trim().toUpperCase();
  camelCaseOutput.innerText = camelCase(input.value.trim());
  pascalCaseOutput.innerText = pascalCase(input.value.trim());
  snakeCaseOutput.innerText = snakeCase(input.value.trim());
  kebabCaseOutput.innerText = kebabCase(input.value.trim());
  trimOutput.innerText = trim(input.value.trim());
}
updatedScreen();

input.addEventListener("input", updatedScreen);

function capitalizedWord(str) {
  if (!str) return str;
  const firstWord = str[0]?.toUpperCase();
  const otherWords = str.slice(1, str.length).toLowerCase();
  return firstWord + otherWords;
}

function camelCase(string) {
  const lowerCase = string.toLowerCase();
  const splittedArray = lowerCase.split(" ");
  const finalArray = splittedArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizedWord(word);
  });
  return finalArray.join("");
}

function pascalCase(string) {
  const lowercase = string.toLowerCase();
  const splittedArray = lowercase.split(" ");
  const finalArray = splittedArray.map((word) => {
    return capitalizedWord(word);
  });
  return finalArray.join("");
}

function snakeCase(string) {
  const splittedArray = string.split(" ");
  return splittedArray.join("_");
}

function kebabCase(string) {
  const splittedArray = string.split(" ");
  return splittedArray.join("-");
}

function trim(string) {
  const splittedArray = string.split(" ");
  return splittedArray.join("");
}
