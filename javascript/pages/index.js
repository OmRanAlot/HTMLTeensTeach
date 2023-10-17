let div = document.getElementById("fact-container");
let sloganButton = document.getElementById("sloganButton");
let factButton = document.getElementById("factButton");

let options = {
  method: "GET",
  headers: { "x-api-key": config.api_key_fact },
};

let url = "https://api.api-ninjas.com/v1/facts?limit=1";

let generateFact = () => {
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => (div.innerText = '"' + data[0].fact + '"'));
};
sloganButton.onclick = function () {
  sloganButton.style.backgroundColor = "var(--TeensTeachBlue)";
  factButton.style.backgroundColor = "rgba(0,0,0,0)";
  generateSlogan();
};
factButton.onclick = function () {
  factButton.style.backgroundColor = "var(--TeensTeachBlue)";
  sloganButton.style.backgroundColor = "rgba(0,0,0,0)";
  generateFact();
};
function generateSlogan() {
  div.innerText = '"Educate the Youth. Create a brighter tomorrow."';
}
