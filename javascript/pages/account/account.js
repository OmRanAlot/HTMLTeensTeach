let sheetID = "1AykXwXXtj4FNwRgfnrKhpzRUur9B0wnAs0QeMlzaXSM";
let sheetTitle = "Sheet1";
let sheetRange = "A1:Z993";
let interestsList = [];
let userInterests = [];
console.log(document.cookie);
console.log(extractCookie());
userInterests = extractCookie();
let fullURL =
  "https://docs.google.com/spreadsheets/d/" +
  sheetID +
  "/gviz/tq?sheet=" +
  sheetTitle +
  "&range=" +
  sheetRange;
fetch(fullURL)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    getData(data);
  });
function getData(data) {
  for (let i = 1; i < data.table.rows.length; i++) {
    let interest = data.table.rows[i].c[1].v;
    if (interest != interestsList[interestsList.length - 1]) {
      interestsList.push(interest);
      addData(interest);
    }
  }
}
function addData(interest) {
  let interestsContainer = document.getElementById("interestsContainer");
  let interestDiv = document.createElement("div");
  interestDiv.id = interest;
  interestDiv.innerHTML = interest;
  interestDiv.className = "false";
  for (let i = 0; i < userInterests.length; i++) {
    if (userInterests[i] == interest) {
      interestDiv.className = "true";
      console.log(userInterests[i]);
    }
  }
  interestsContainer.appendChild(interestDiv);
  interestDiv.onclick = function () {
    if (interestDiv.className == "false") {
      interestDiv.className = "true";
      userInterests.push(interest);
    } else {
      interestDiv.className = "false";
      for (let p = 0; p < userInterests.length; p++) {
        if (userInterests[p] == interest) {
          userInterests.splice(p, 1);
        }
      }
    }
    
    addCookie(userInterests);
    extractCookie();
    console.log(document.cookie);
    // if(userInterests.length<4){
    //     alert("Please choose at least 4 interests");
    // }
  };
}

function addCookie(list) {
  document.cookie = "interests:" + list;
}
function extractCookie() {
  let str = document.cookie;
  let running = false;
  let desiredList = "";
  let finalList = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (running) {
      desiredList += str[i];
    }
    if (str[i] == ":") {
      running = true;
    }
    if (str[i] == ";") {
      running = false;
    }
  }
  console.log(desiredList);
  for (let i = 0; i < desiredList.length; i++) {
    if (desiredList[i] != "," && desiredList[i] != ";") {
      word += desiredList[i];
    } else if (desiredList[i] == "," || i == desiredList.length - 1) {
      finalList.push(word);
      word = "";
    }
  }
  return finalList;
}
