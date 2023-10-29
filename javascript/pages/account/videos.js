let sheetID = "1AykXwXXtj4FNwRgfnrKhpzRUur9B0wnAs0QeMlzaXSM";
let sheetTitle = "Sheet1";
let sheetRange = "A1:Z993";
let userInterests = [];
var videoData = [
  {
    ChannelName: "TeensTeach",
    ChannelURL: "https://www.youtube.com/@TeensTeach1",
    PhotoURL:
      "https://yt3.googleusercontent.com/CsK1eLJ5OFzC2p4nYcEOPFChfkosklCHOi3S28a8kiSgipiRobgoB15WdFNcaT3LFYG2pDVX7nU=s176-c-k-c0x00ffffff-no-rj",
  },
];
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
    interestToList(data);
  });
let interestsArray = extractCookie();
console.log(interestsArray);
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
function interestToList(data) {
  let ytList = [];
  for (let i = 0; i < userInterests.length; i++) {
    for (let p = 1; p < data.table.rows.length; p++) {
      if (data.table.rows[p].c[1].v != null) {
        if (userInterests[i] == data.table.rows[p].c[1].v) {
          if (data.table.rows[p].c[2].v != "null") {
            console.log(data.table.rows[p].c[2].v);
            ytList.push(p);
          }
        }
      }
    }
  }
  //   console.log(data);
  //   console.log(ytList);
  convertListToData(ytList, data);
}
function randNums(number) {
  let numList = [];
  let randomNumber = Math.floor(Math.random() * Math.floor(number / 3)) + 1;
  let running = true;
  let it = 0;
  let conflictCounter = 0;
  while (running) {
    let conflict = false;
    it += randomNumber;
    it %= number;
    for (let i = 0; i < numList.length; i++) {
      if (numList[i] == it) {
        conflict = true;
      }
    }
    if (!conflict) {
      numList.push(it);
    } else {
      conflictCounter++;
    }

    if (numList.length >= 9) {
      running = false;
    }
    if (conflictCounter > 20) {
      randomNumber += 1;
      if (randomNumber > number) {
        randomNumber -= 2;
      }
    }
  }
  return numList;
}

function convertListToData(list, data) {
  let numberList = randNums(list.length);
  for (let p = 0; p < 9; p++) {
    let nl = numberList[p];
    //
    let listElement = list[nl];
    videoData.push({
      ChannelName: (ChannelName = data.table.rows[listElement].c[2].v),
      ChannelURL: data.table.rows[listElement].c[4].v,
      PhotoURL: data.table.rows[listElement].c[3].v
    });

  }
  convertDataToHTML(videoData);
}
function convertDataToHTML(data) {
  let bigContainer = document.getElementById("bigContainer");
  for (let i = 0; i < data.length; i++) {
    let object = data[i];
    let channelContainer = document.createElement("div");
    channelContainer.id = "channelContainer";
    let profile = document.createElement("div");
    profile.id = "profile";
    let ytLink = document.createElement("a");
    ytLink.href = object.ChannelURL;
    let channelImg = document.createElement("img");
    channelImg.src = object.PhotoURL;
    ytLink.appendChild(channelImg);
    profile.appendChild(ytLink);
    channelContainer.appendChild(profile);
    let nameDiv = document.createElement("div");
    nameDiv.id = "name";
    let nameh1 = document.createElement("h1");
    nameh1.innerHTML = object.ChannelName;
    nameDiv.appendChild(nameh1);
    channelContainer.appendChild(nameDiv);
    bigContainer.appendChild(channelContainer);
  }
}
