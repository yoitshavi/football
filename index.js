"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

function playerDropDown() {
  const teamsListEl = document.getElementById("teamsList");
  for (let i = 0; i < teams.length; i++) {
    let optionEl = document.createElement("option");
    optionEl.textContent = teams[i].name;
    optionEl.value = teams[i].code;

    teamsListEl.appendChild(optionEl);
  }
}
playerDropDown();

function onBtnClick() {
  const teamsListEl = document.getElementById("teamsList");
  //   const selectedIndex = teamsListEl.selectedIndex;
  //   //entire option element
  //   const options = teamsListEl.options;
  //   const selectedOption = options[selectedIndex];

  // const selectedName = selectedOption.textContent;

  let teamCode = teamsListEl.value; //placeholder for array element

  let selectedTeam;
  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    if (team.code === teamCode) {
      selectedTeam = team;
    }
  }

  const message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
  const messageEl = document.getElementById("message");
  messageEl.innerHTML = message;
  return false;
}
const form = document.querySelector("form");
form.onsubmit = onBtnClick;

// const btnEl = document.getElementById("button");
// const teamsListEl = document.getElementById("teamsList");

// btnEl.onclick = logSelectedTeam;

// function logSelectedTeam() {
//   const selectedIndex = teamsListEl.selectedIndex;

//   const options = teamsListEl.options;

//   const selectedOption = options[selectedIndex].plays;

//   console.log(selectedOption);
// }

//  window.onload = function getTeamsList() {
//    const teamNames = [
//      "Dallas Cowboys",
//      "Denver Broncos",
//      "Houston Texans",
//      "Kansas City Chiefs",
//    ];
//    const codeNames = ["DAL", "DEN", "HOU", "KAN"];

//    const selectEl = document.getElementById("teamsList");

//    for (let i in teamNames) {
//      const teamName = teamNames[i];
//      const codeName = codeNames[i];

//      const optionEl = document.createElement("option");
//      optionEl.textContent = teamName;
//      optionEl.value = codeName;

//      selectEl.appendChild(optionEl);
//    }
//  };
