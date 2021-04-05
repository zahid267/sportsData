
var teamListEl = $('#team_list');
var teamContEl = $('.container');
var teamNameEl = "";
let teamDB = [];    var eventDB = [];

function getTeams() {
    var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            teamDB = data;
            console.log("teamDB: ", teamDB);
            getParams();

            //dispTeam();
        });
}
function getParams() {
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
    var searchParamsArr = document.location.search.split('&');
  
    // Get the team index and teamid values
    var teamIndex = searchParamsArr[0].split('=').pop();
    var teamId = searchParamsArr[1].split('=').pop();
  
    dispTeam(teamIndex);
    getTeamDet(teamId);
  }
function getTeamDet(teamid){
    var reqUrl = "https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id="+teamid;
    fetch(reqUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
           // console.log("teamDet: ", data);
            eventDB = data.results;
            dispTeamEvents(eventDB);
        });
}
function dispTeam(j) {
    
    var trec = teamDB.teams[j]; /// Individual team record
        var httPrefix = "https://";
         console.log(trec);
         /*strWebsite: "www.nba.com/nets" */
         //var logoEl =
          $('#logo').attr('src',trec.strTeamLogo)
         var brandLogoEl = $('.brand-logo').attr('href', httPrefix+trec.strWebsite).text(trec.strTeam);
        // var brandLogoEl = $('.brand-logo').attr('href', trec.strWebsite).append(logoEl);
         
         //brandLogoEl.append(logoEl);
         
         var navMobileEl = $('#nav-mobile')
         var aEl = $('<a>').attr('href',httPrefix+trec.strFacebook).text("Facebook")
         aEl.attr('target', '_blank');
         var liEl = $('<li>').append(aEl);
         navMobileEl.append(liEl);

         aEl = $('<a>').attr('href',httPrefix+trec.strInstagram).text("Instagram")
         aEl.attr('target', '_blank');
         liEl = $('<li>').append(aEl);
         navMobileEl.append(liEl);
         aEl = $('<a>').attr('href',httPrefix+trec.strTwitter).text("Twitter")
         aEl.attr('target', '_blank');
         liEl = $('<li>').append(aEl);
         navMobileEl.append(liEl);
         aEl = $('<a>').attr('href',httPrefix+trec.strYoutube).text("Youtube")
         aEl.attr('target', '_blank');
         liEl = $('<li>').append(aEl);
         navMobileEl.append(liEl);

         //var teamNameEl = $('#team_title').text(trec.strTeam)
         var cityEl = $('#city').text(trec.strStadiumLocation+", "+trec.strCountry);
         var sinceEl = $('#since').text("Since "+trec.intFormedYear);
         $('#city_info').append(cityEl, sinceEl);
         
        // var descEl = 
         $('#team_desc').text(trec.strDescriptionEN);
        // teamContEl.append(descEl);
        
        //var badgeEl = 
        $('#badge').attr('src',trec.strTeamBadge)
        //var bannerEl =
         $('#banner').attr('src',trec.strTeamBanner)
        //var jerseyEl = 
        $('#jersey').attr('src',trec.strTeamJersey)
        //teamContEl.append(logoEl, badgeEl, bannerEl, jerseyEl)

        //var stadiumEl = 
        $('#team_stadium').text(trec.strStadium);
        //var stadiumLocEl = 
        $('#stadium_loc').text(trec.strStadiumLocation);
       // var stadiumDesc = 
        $('#stadium_desc').text(trec.strStadiumDescription);
       // teamContEl.append(stadiumEl, stadiumLocEl, stadiumDesc);
        //var stadiumThumbEl = 
        $('#stadium_thumb').attr('src', trec.strStadiumThumb)
    
}
function dispTeamEvents(eventDB){
    var erec;   var tbodyEl = $('#events');
    var trEl;   var tdEl;
    for(var i=0; i<eventDB.length; i++){
        erec = eventDB[i];
        tdEl = $('<td>').text(erec.dateEvent);
        trEl = $('<tr>').append(tdEl);
        tdEl = $('<td>').text(erec.strSeason);
        trEl.append(tdEl);
        tdEl = $('<td>').text(erec.strEvent);
        trEl.append(tdEl);
        tdEl = $('<td>').text(erec.intHomeScore);
        trEl.append(tdEl);
        tdEl = $('<td>').text(erec.intAwayScore);
        trEl.append(tdEl);
       // tdEl = $('<td>').text(erec.strEventAlternate);
        //trEl.append(tdEl);
        tbodyEl.append(trEl);
    }
    /*
    dateEvent: "2021-03-30"
dateEventLocal: null
idAPIfootball: "108890"
idAwayTeam: "134870"
idEvent: "1095101"
idHomeTeam: "134865"
idLeague: "4387"
idSoccerXML: null
intAwayScore: "102"
intAwayShots: null
intHomeScore: "116"
intHomeShots: null
intRound: "0"
intSpectators: null
strAwayFormation: null
strAwayGoalDetails: null
strAwayLineupDefense: null
strAwayLineupForward: null
strAwayLineupGoalkeeper: null
strAwayLineupMidfield: null
strAwayLineupSubstitutes: null
strAwayRedCards: null
strAwayTeam: "Chicago Bulls"
strAwayYellowCards: null
strBanner: null
strCity: null
strCountry: "USA"
strDescriptionEN: null
strEvent: "Golden State Warriors vs Chicago Bulls"
strEventAlternate: "Chicago Bulls @ Golden State Warriors"
strFanart: null
strFilename: "NBA 2021-03-30 Golden State Warriors vs Chicago Bulls"
strHomeFormation: null
strHomeGoalDetails: null
strHomeLineupDefense: null
strHomeLineupForward: null
strHomeLineupGoalkeeper: null
strHomeLineupMidfield: null
strHomeLineupSubstitutes: null
strHomeRedCards: null
strHomeTeam: "Golden State Warriors"
strHomeYellowCards: null
strLeague: "NBA"
strLocked: "unlocked"
strMap: null
strOfficial: null
strPoster: null
strPostponed: "no"
strResult: null
strSeason: "2020-2021"
strSport: "Basketball"
strSquare: null
strStatus: "FT"
strTVStation: null
strThumb: "https://www.thesportsdb.com/images/media/event/thumb/7khcs71615491508.jpg"
strTime: "02:00:00"
strTimeLocal: null
strTimestamp: "2021-03-30T02:00:00+00:00"
    */

}
getTeams();
/*



strGender: "Male"

strLocked: "unlocked"
strManager: ""
strRSS: "http://www.nba.com/nets/rss.xml"
strSport: "Basketball"


strTeamFanart1: "https://www.thesportsdb.com/images/media/team/fanart/xvqqsr1420587418.jpg"
strTeamFanart2: "https://www.thesportsdb.com/images/media/team/fanart/uywuts1420587649.jpg"
strTeamFanart3: "https://www.thesportsdb.com/images/media/team/fanart/qvtsur1420587779.jpg"
strTeamFanart4: "https://www.thesportsdb.com/images/media/team/fanart/vwrrup1421415402.jpg"

strTeamShort: "BKN"


*/