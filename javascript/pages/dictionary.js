
let searchButton = document.getElementById("searchButton");
searchButton.onclick = function () {
  let textValue = document.getElementById("word").value;
  getDefinition(textValue);
};
let options = {
  method: "GET",
};
let getDefinition = (word) => {
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => siftData(data));
};
function siftData(data) {
  console.log(data);
  let word = data[0].word;
  let phoenetic;
  if (data[0].phonetics.length > 1) {
    phoenetic = data[0].phonetics[1];
  } else {
    phoenetic = data[0].phonetics[0];
  }
  boxSetup(word, phoenetic.text, phoenetic.audio);
  for (let i = 0; i < data[0].meanings.length; i++) {
    let meaning = data[0].meanings[i];
    let POS = meaning.partOfSpeech;
    let definition = meaning.definitions[0].definition;
    let synonyms = convertSynToString(meaning.definitions[0].synonyms);
    let antonyms = convertSynToString(meaning.definitions[0].antonyms);
    let example = "No example sentence for this word";
    if (meaning.definitions[0].example != undefined) {
      example = meaning.definitions[0].example;
    }
    displayWords(POS, definition, antonyms, synonyms, example);
  }
  wordSetup();
}
function convertSynToString(array) {
  console.log(array);
  if (array.length == 0) {
    return "None";
  }
  if (array.length == 1) {
    return array[0];
  } else {
    let ret = "";
    for (let i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        ret += array[i];
      } else {
        ret += array[i] + ",";
      }
    }
    return ret;
  }
}
function wordSetup() {
  let expandButton = document.querySelectorAll("#arrowButton");
  for (let i = 0; i < expandButton.length; i++) {
    console.log("HELLO");

    expandButton[i].onclick = function () {
      let expandeds = document.querySelectorAll("#expandedInfo");
      if (expandeds[i].style.display == "block") {
        expandeds[i].style.display = "none";
      } else {
        expandeds[i].style.display = "block";
      }
    };
  }
}
setTimeout(function () {
  console.log("FEJO");
  wordSetup();
}, 1000);

function displayWords(partOfSpeech, definitions, antonyms, synonyms, examples) {
  let tipTile = document.getElementById("tipTile");
  tipTile.id = "tipTile";
    tipTile.innerHTML = "";

  let wordContainer = document.createElement("div");
  wordContainer.id = "wordContainer";

  let tip = document.createElement("div");
  tip.className = "tip";

  let arrowContainer = document.createElement("div");
  arrowContainer.id = "arrowContainer";
  let arrowButton = document.createElement("button");
  arrowButton.id = "arrowButton";
  let arrowImg = document.createElement("img");
  arrowImg.src = "../../assets/images/navbar/play.png";

  arrowButton.appendChild(arrowImg);
  arrowContainer.appendChild(arrowButton);
  tip.appendChild(arrowContainer);

  let tipBox = document.createElement("div");
  tipBox.className = "tipBox";
  let tipText = document.createElement("p");
  tipText.id = "tipText";
  tipText.innerHTML = partOfSpeech;
  tipBox.appendChild(tipText);
  tip.appendChild(tipBox);

  let tipBox2 = document.createElement("div");
  tipBox2.className = "tipBox";
  let wordDef = document.createElement("h1");
  wordDef.id = "wordDef";
  wordDef.innerHTML = definitions;
  tipBox2.appendChild(wordDef);
  tip.appendChild(tipBox2);

  let expandedInfo = document.createElement("div");
  expandedInfo.id = "expandedInfo";

  let definitionContainer = document.createElement("div");
  definitionContainer.id = "DefinitionContainer";
  let definition = document.createElement("h1");
  definition.id = "definition";
  definition.className = "key";
  definition.innerHTML = "Definition:";
  definitionContainer.appendChild(definition);
  let definitionList = document.createElement("h1");
  definitionList.id = "definitionList";
  definitionList.className = "value";
  definitionList.innerHTML = definitions;
  definitionContainer.appendChild(definitionList);
  expandedInfo.appendChild(definitionContainer);

  let SynonymContainer = document.createElement("div");
  SynonymContainer.id = "SynonymContainer";
  let synonym = document.createElement("h1");
  synonym.id = "synonym";
  synonym.className = "key";
  synonym.innerHTML = "Synonyms: ";
  SynonymContainer.appendChild(synonym);
  let synonymList = document.createElement("h1");
  synonymList.id = "synonymList";
  synonymList.className = "value";
  synonymList.innerHTML = synonyms;
  SynonymContainer.appendChild(synonymList);
  expandedInfo.appendChild(SynonymContainer);

  let AntonymContainer = document.createElement("div");
  AntonymContainer.id = "AntonymContainer";
  let antonym = document.createElement("h1");
  antonym.id = "antonym";
  antonym.className = "key";
  antonym.innerHTML = "Antonym: ";
  AntonymContainer.appendChild(antonym);

  let antonymList = document.createElement("h1");
  antonymList.id = "antonymList";
  antonymList.className = "value";
  antonymList.innerHTML = antonyms;
  AntonymContainer.appendChild(antonymList);
  expandedInfo.appendChild(AntonymContainer);

  let ExampleContainer = document.createElement("div");
  ExampleContainer.id = "ExampleContainer";
  let example = document.createElement("h1");
  example.id = "example";
  example.className = "key";
  example.innerHTML = "Example:";
  ExampleContainer.appendChild(example);

  let exampleList = document.createElement("h1");
  exampleList.id = "exampleList";
  exampleList.className = "value";
  exampleList.innerHTML = examples;
  ExampleContainer.appendChild(exampleList);

  expandedInfo.appendChild(ExampleContainer);
  wordContainer.appendChild(tip);
  wordContainer.appendChild(expandedInfo);

  tipTile.appendChild(wordContainer);
}
function boxSetup(word, pronounce, audio) {
  let boxContainer = document.getElementById("boxContainer");
  boxContainer.innerHTML = "";

  let topBox = document.createElement("div");
  topBox.id = "topBox";

  let topText = document.createElement("div");
  topText.id = "topText";
  let toph1 = document.createElement("h1");
  toph1.innerHTML = word;
  topText.appendChild(toph1);

  topBox.appendChild(topText);

  let PhoenicDiv = document.createElement("div");
  PhoenicDiv.id = "PhoenicDiv";
  let phoenich1 = document.createElement("h1");
  phoenich1.innerHTML = pronounce;
  PhoenicDiv.appendChild(phoenich1);

  topBox.appendChild(PhoenicDiv);

  let pronounceBox = document.createElement("div");
  pronounceBox.id = "pronounceBox";
  let pronounceButton = document.createElement("button");
  pronounceButton.id = "pronounceButton";
  pronounceButton.onclick = playMusic;
  let pronounceAudio = document.createElement("audio");
  pronounceAudio.src = audio;
  let pronounceImg = document.createElement("img");
  pronounceImg.src = "../../assets/images/navbar/volume.png";
  pronounceButton.appendChild(pronounceAudio);
  pronounceButton.appendChild(pronounceImg);
  pronounceBox.appendChild(pronounceButton);

  topBox.appendChild(pronounceBox);

  boxContainer.appendChild(topBox);
}
function playMusic() {
  let audio = document.querySelector("audio");
  if (audio != null) {
    audio.play();
  }
}
