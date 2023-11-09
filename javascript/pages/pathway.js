let dropdownvalue = document.getElementById("year");

let freshmanList = [
  "Find your interests and commit to clubs.",
  "Focus on your school work, this will be your easiest year of highschool.",
  "Make new friends.",
  "Experiment with your time.",
  "Begin to think about summer programs.",
  "Don't be overwhelmed, just follow your interests and have fun.",
];
let sophomoreList = [
  "Become an active leader in the clubs you're involved in.",
  "Begin to take more advanced classes that suit your interests",
  "Plan out summer programs.",
  "Maintain good grades.",
  "Develop a consistent schedule for managing your time.",
  "Follow your passions and set yourself up for success.",
];
let juniorList = [
  "Begin studying for the SAT.",
  "Take mostly, if not all advanced classes.",
  "Remain consistent in your clubs.",
  "Space out your time efficiently, or else things will get hectic.",
  "Start making a list for colleges you will be applying to.",
  "Apply to summer internships and programs.",
];
let seniorList = [
  "Finish applying to your college list.",
  "Enjoy your time, highschool is almost over.",
  "Look out for and apply to scholarships.",
  "Remain a consistent member in your clubs.",
  "Keep your grades up.",
  "Rejoice, because all your hard work finally paid off!",
];
dropdownvalue.onchange = function () {
  pairList(dropdownvalue.value);
};
function pairList(value) {
  let list;
  switch (value) {
    case "Freshman":
      list = freshmanList;
      break;
    case "Sophomore":
      list = sophomoreList;
      break;
    case "Junior":
      list = juniorList;
      break;
    case "Senior":
      list = seniorList;
      break;
  }
  changeContent(list);
}
function changeContent(list) {
  let changedElements = document.querySelectorAll("#tipText");
  for (let i = 0; i < changedElements.length; i++) {
    changedElements[i].innerHTML = list[i];
  }
}
