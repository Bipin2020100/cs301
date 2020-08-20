let prompt = require("prompt-sync")();

let totalMembers = prompt("total number of members:");
let totalTeams = prompt("Total number of teams:");
let minPerTeam = Math.round(totalMembers/totalTeams);
let maxPerTeam = minPerTeam + 1;
let numberOfTeamsWithMaxNumber = Math.floor(((totalMembers/totalTeams) - minPerTeam) * totalTeams) ;
let remTeams = totalTeams - numberOfTeamsWithMaxNumber ;
console.log(numberOfTeamsWithMaxNumber + " teams with" + maxPerTeam + "members and" + remTeams + "teams with " + minPerTeam + "members" );
