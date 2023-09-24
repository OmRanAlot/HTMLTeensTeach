let menuDirective = document.querySelector(".navContainer");
let menuIcon = document.getElementById("navImage");
let menuOpen = false;
menuDirective.onclick = openMenu;
menuIcon.onclick = openMenu;
let page = document.querySelector(".frontPage");
const navIcons = document.querySelectorAll(".elements a");
function openMenu() {
  if (menuOpen) {
    menuDirective.style.height = "82px";
    menuDirective.style.borderRadius = "10%";
    hideNavIcons();
  } else {
    menuDirective.style.height = "99vh";
    menuDirective.style.borderRadius = "20px";
    showNavIcons();
  }
  menuOpen = !menuOpen;
}
function showNavIcons() {
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.opacity = "1";
  }
}
function hideNavIcons() {
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.opacity = "0";
  }
}

let MissionPage = document.createElement("div");
MissionPage.className = "frontPage";
let mainSection = document.createElement("div");
mainSection.className = "mainSection";
let divContainer1 = document.createElement("div");
divContainer1.className = "divContainer";
let pageTitle = document.createElement("div");
pageTitle.id = "pageTitle";
pageTitle.innerHTML = "Our Mission";
let divContainer2 = document.createElement("div");
divContainer1.className = "divContainer";
let missionStatement = document.createElement("div");
missionStatement.id = "missionStatement";
missionStatement.className = "tile";
let smallText1 = document.createElement("p");
smallText1.className = "smallText";
smallText1.innerHTML = "Educate the Youth, Create a Brighter Tomorrow";
missionStatement.appendChild(smallText1);
divContainer2.className = "divContainer";
divContainer2.appendChild(missionStatement);
let divContainer3 = document.createElement("div");
divContainer3.className = "divContainer";
let missionParagraph = document.createElement("div");
missionParagraph.id = "missionParagraph";
missionParagraph.className = "tile";
let smallText = document.createElement("p");
smallText.className = "smallText";
smallText.innerHTML =
  "At Teens Teach, we look to instill an intrinsic desire for knowledge within the youth. Through our fresh perspective, we create captivating, informative videos from teenagers, for teenagers. We utilize our platform to provide educational opportunities and empower others with the gift of education.";
missionParagraph.appendChild(smallText);
divContainer3.appendChild(missionParagraph);

let divContainer4 = document.createElement("div");
divContainer4.className = "divContainer";
let missionParagraph2 = document.createElement("div");
missionParagraph2.id = "missionParagraph";
missionParagraph2.className = "tile";
let smallText2 = document.createElement("p");
smallText2.className = "smallText";
smallText2.innerHTML =
  "In an ever changing society, it is crucial for the new generation to foster a deep understanding of the world around them. Only with this understanding can the leaders of tomorrow advance humanity and innovate our world towards a brighter future.";
missionParagraph2.appendChild(smallText2);
divContainer4.appendChild(missionParagraph2);


divContainer1.appendChild(pageTitle);
mainSection.appendChild(divContainer1);
mainSection.appendChild(divContainer2);
mainSection.appendChild(divContainer4);
mainSection.appendChild(divContainer3);
MissionPage.appendChild(mainSection);

let aboutPage = document.createElement("div");
aboutPage.className = "frontPage";
let mainSection2 = document.createElement("div");
mainSection2.className = "mainSection";
let divContainer5 = document.createElement("div");
divContainer1.className = "divContainer";
let pageTitle1 = document.createElement("div");
pageTitle1.id = "pageTitle";
pageTitle1.innerHTML = "About Us";
let divContainer6 = document.createElement("div");
divContainer6.className = "divContainer";
let tile1 = document.createElement("div");
tile1.className = "tile";
tile1.id = "aboutDescription";
let smallText3 = document.createElement("p");
smallText3.className = "smallText";
smallText3.innerHTML =
  "We are an unrelenting group of five academically passionate teenagers with a deep understanding of how education and its opportunities can change the world.";

tile1.appendChild(smallText3);
divContainer6.appendChild(tile1);
let peopleContainer = document.createElement("div");
peopleContainer.id = "peopleContainer";
peopleContainer.className = "wrapBox";

let lamarr = document.createElement("div");
lamarr.className = "personTile";
lamarr.id = "lamarr";
let lamarrPhoto = document.createElement("div");
lamarrPhoto.className = "personPhoto";
let lamarrPhotoImg = document.createElement("img");
lamarrPhotoImg.src = "assets/images/photos/GreyBackground/lamarr.png";
lamarrPhoto.appendChild(lamarrPhotoImg);
let lamarrName = document.createElement("div");
lamarrName.className = "personName";
let lamarrNameClass = document.createElement("p");
lamarrNameClass.className = "nameClass";
lamarrNameClass.innerHTML = "Om Rana";
lamarrName.appendChild(lamarrNameClass);
let lamarrBreak = document.createElement("hr");
let lamarrDescriptionClass = document.createElement("div");
lamarrDescriptionClass.className = "description";
let lamarrDescription = document.createElement("p");
lamarrDescription.className = "descriptionClass";
lamarrDescription.innerHTML =
  "“I love to learn, love to understand how the world works and immerse myself in new topics. The world that we live in seems random at times, but knowledge provides a sense of security and an opportunity to change your life.”";
lamarrDescriptionClass.appendChild(lamarrDescription);
lamarr.appendChild(lamarrPhoto);
lamarr.appendChild(lamarrName);
lamarr.appendChild(lamarrBreak);
lamarr.appendChild(lamarrDescriptionClass);
peopleContainer.appendChild(lamarr);

let om = document.createElement("div");
om.className = "personTile";
om.id = "om";
let omPhoto = document.createElement("div");
omPhoto.className = "personPhoto";
let omPhotoImg = document.createElement("img");
omPhotoImg.src = "assets/images/photos/GreyBackground/om.png";
omPhoto.appendChild(omPhotoImg);
let omName = document.createElement("div");
omName.className = "personName";
let omNameClass = document.createElement("p");
omNameClass.className = "nameClass";
omNameClass.innerHTML = "Om Rana";
omName.appendChild(omNameClass);
let omBreak = document.createElement("hr");
let omDescriptionClass = document.createElement("div");
omDescriptionClass.className = "description";
let omDescription = document.createElement("p");
omDescription.className = "descriptionClass";
omDescription.innerHTML =
  "“My immigrant parents taught themselves valuable skills that helped them in this competitive world. I want others to understand that education allows you to soar to new heights that were previously unimaginable”";
omDescriptionClass.appendChild(omDescription);
om.appendChild(omPhoto);
om.appendChild(omName);
om.appendChild(omBreak);
om.appendChild(omDescriptionClass);
peopleContainer.appendChild(om);

let kennedy = document.createElement("div");
kennedy.className = "personTile";
kennedy.id = "kennedy";
let kennedyPhoto = document.createElement("div");
kennedyPhoto.className = "personPhoto";
let kennedyPhotoImg = document.createElement("img");
kennedyPhotoImg.src = "assets/images/photos/GreyBackground/kennedy.png";
kennedyPhoto.appendChild(kennedyPhotoImg);
let kennedyName = document.createElement("div");
kennedyName.className = "personName";
let kennedyNameClass = document.createElement("p");
kennedyNameClass.className = "nameClass";
kennedyNameClass.innerHTML = "Om Rana";
kennedyName.appendChild(kennedyNameClass);
let kennedyBreak = document.createElement("hr");
let kennedyDescriptionClass = document.createElement("div");
kennedyDescriptionClass.className = "description";
let kennedyDescription = document.createElement("p");
kennedyDescription.className = "descriptionClass";
kennedyDescription.innerHTML =
  "“I love to learn, love to understand how the world works and immerse myself in new topics. The world that we live in seems random at times, but knowledge provides a sense of security and an opportunity to change your life.”";
kennedyDescriptionClass.appendChild(kennedyDescription);
kennedy.appendChild(kennedyPhoto);
kennedy.appendChild(kennedyName);
kennedy.appendChild(kennedyBreak);
kennedy.appendChild(kennedyDescriptionClass);
peopleContainer.appendChild(kennedy);

let mark = document.createElement("div");
mark.className = "personTile";
mark.id = "mark";
let markPhoto = document.createElement("div");
markPhoto.className = "personPhoto";
let markPhotoImg = document.createElement("img");
markPhotoImg.src = "assets/images/photos/GreyBackground/mark.png";
markPhoto.appendChild(markPhotoImg);
let markName = document.createElement("div");
markName.className = "personName";
let markNameClass = document.createElement("p");
markNameClass.className = "nameClass";
markNameClass.innerHTML = "Mark Tarkany";
markName.appendChild(markNameClass);
let markBreak = document.createElement("hr");
let markDescriptionClass = document.createElement("div");
markDescriptionClass.className = "description";
let markDescription = document.createElement("p");
markDescription.className = "descriptionClass";
markDescription.innerHTML =
  "“People take many things in life for granted. Commodities, experiences, moments that you may think are ordinary to you, but are alien to others. Education is something to never take for granted and with Teens Teach, I want to make sure that education is never taken for granted.”";
markDescriptionClass.appendChild(markDescription);
mark.appendChild(markPhoto);
mark.appendChild(markName);
mark.appendChild(markBreak);
mark.appendChild(markDescriptionClass);
peopleContainer.appendChild(mark);

let marlon = document.createElement("div");
marlon.className = "personTile";
marlon.id = "marlon";
let marlonPhoto = document.createElement("div");
marlonPhoto.className = "personPhoto";
let marlonPhotoImg = document.createElement("img");
marlonPhotoImg.src = "assets/images/photos/GreyBackground/marlon.png";
marlonPhoto.appendChild(marlonPhotoImg);
let marlonName = document.createElement("div");
marlonName.className = "personName";
let marlonNameClass = document.createElement("p");
marlonNameClass.className = "nameClass";
marlonNameClass.innerHTML = "Marlon Rodriguez";
marlonName.appendChild(marlonNameClass);
let marlonBreak = document.createElement("hr");
let marlonDescriptionClass = document.createElement("div");
marlonDescriptionClass.className = "description";
let marlonDescription = document.createElement("p");
marlonDescription.className = "descriptionClass";
marlonDescription.innerHTML =
  "“People take many things in life for granted. Commodities, experiences, moments that you may think are ordinary to you, but are alien to others. Education is something to never take for granted and with Teens Teach, I want to make sure that education is never taken for granted.”";
markDescriptionClass.appendChild(marlonDescription);
marlon.appendChild(marlonPhoto);
marlon.appendChild(marlonName);
marlon.appendChild(marlonBreak);
marlon.appendChild(marlonDescriptionClass);
peopleContainer.appendChild(marlon);

divContainer5.appendChild(pageTitle1);
mainSection2.appendChild(divContainer5);
mainSection2.appendChild(divContainer6);
mainSection2.appendChild(peopleContainer);
aboutPage.appendChild(mainSection2);

const translatePress = new Map();
translatePress.set("mission_div", MissionPage);
translatePress.set("about_us_div", aboutPage);
// translatePress.set("impact_div", <ImpactPage />);
// translatePress.set("what_we_do_div", <WorkPage />);
// translatePress.set("contact_div", <ContactPage />);
// translatePress.set("donate_div", <DonatePage />);

for (const element of navIcons) {
  element.addEventListener("click", () => {
    for (const option of translatePress) {
      if (element.id == option[0]) {
        document.querySelector(".frontPage").replaceWith(option[1]);
      }
    }
  });
}
