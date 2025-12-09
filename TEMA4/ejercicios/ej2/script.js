let arrayNames = [];

function insertName() {
  let nameInput = document.getElementById("name");
  let name = nameInput.value;
  console.log(name);
  if (!arrayNames.includes(name)) {
    arrayNames.push(name);
  }
  nameInput = "";
}
