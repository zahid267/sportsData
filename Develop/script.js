const myListContainer = document.querySelector('.list-group');
var teamsContainerEl = document.querySelector('#nbaTeams-container');
var teamSearchTerm = document.querySelector('#nbaTeams-search-term');
var userInput = document.querySelector('#team_name');
var tNameEl = $('#team_name');
var teamListEl = $('#team_list');
var teamNameEl = "";  var optionEl = "";
let teamDB = [];
var teamList = [];
var teamNames = [];

function getTeams() {
    var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            teamDB = data;
            console.log("teamDB: ", teamDB);
            showTeams();
        });
}

function showTeams() {
    //console.log(data.teams[0].strTeam);
    for (var i = 0; i < teamDB.teams.length; i++) {

        // console.log(teamDB.teams[i].strTeam);
        var teamName = (teamDB.teams[i].strTeam);
        var teamid = teamDB.teams[i].idTeam;
        

       // var nbaTeamEl = document.createElement('div');
        // nbaTeamEl.setAttribute('class', '')
        // nbaTeamEl.classList = 'list-item flex-row justify-space-between align-center';

        //var titleEl = document.createElement('span');
      //  titleEl.textContent = teamName;
      teamList[i] = teamName;
        teamNameEl = $('<li>');
        teamNameEl.attr("data-index", i);
        teamNameEl.attr("data-id", teamid);
        teamNameEl.text(teamName);
        teamListEl.append(teamNameEl);
        //optionEl = $('<option>');
        //optionEl.prop("value", teamid);
        //optionEl.text(teamName);
        //tNameEl.append(optionEl);   /// Team Name dropdown list
        tNameEl.append('<option value="' + teamName + '">' + teamName + '</option>');

    }
   // alert(tNameEl.innerHTML);

    teamNames = teamList;
    setAutoComplete(teamList)
}

function searchTeams() {
    // event.preventDefault();
  const teamNameSearch = userInput.value
  var teamIndex = "";
  for(var i = 0; i< teamList.length; i++){
    if(teamNameSearch.toLowerCase() === teamList[i].toLowerCase()){
      teamIndex = i;
      i = teamList.length+1;
    }
  }
  if(teamIndex != ""){
    var teamRecord = teamDB.teams[teamIndex];
    var teamRec = JSON.stringify(teamRecord);
    sessionStorage.setItem("teamRecord", teamRec);
    var queryString = './team.html';      ///?q=' + teamIndex+"&teamid=";         //searchInputVal + '&format=' + formatInputVal;
    location.assign(queryString);
  }else{
    alert("Team name does not exists in NBA league - "+teamNameSearch);
  }
}

teamListEl.on('click', function(event){
  event.preventDefault();
  var teamIndex = event.target.dataset.index;
  //var teamId = event.target.dataset.id;
  //console.log(teamIndex + " --- " + teamId);
  //console.log("data : " + teamDB);
  var teamRecord = teamDB.teams[teamIndex];
  var teamRec = JSON.stringify(teamRecord);
  //console.log(teamRec);

  sessionStorage.setItem("teamRecord", teamRec);

  var queryString = './team.html';      ///?q=' + teamIndex+"&teamid="+teamId;         //searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
  /// Call the teamStats function next
})

// Autocomplete widget
function setAutoComplete(teamListNames){
  //$(function () {
   // teamNames = teamList;
    
    $('#nbaTeam').autocomplete({
      source: teamListNames,
    });
  //});
}

getTeams();