
var teamListEl = $('#team_list');
var teamContEl = $('.container');
var teamNameEl = "";
let teamDB = [];

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
  
    dispTeam(teamIndex, teamId);
  }

function dispTeam(j,id) {
    
    var trec = teamDB.teams[j]; /// Individual team record

         console.log(trec);
         /*strWebsite: "www.nba.com/nets" */
         //var logoEl =
          $('#logo').attr('src',trec.strTeamLogo)
         var brandLogoEl = $('.brand-logo').attr('href', trec.strWebsite).text(trec.strTeam);
        // var brandLogoEl = $('.brand-logo').attr('href', trec.strWebsite).append(logoEl);
         
         //brandLogoEl.append(logoEl);

         var navMobileEl = $('#nav-mobile')
         var aEl = $('<a>').attr('href',trec.strFacebook).text("Facebook")
         var liEl = $('<li>').append(aEl);
         navMobileEl.append(liEl);

         aEl = $('<a>').attr('href',trec.strInstagram).text("Instagram")
         liEl = $('<li>').append(aEl);
         navMobileEl.append(liEl);
         aEl = $('<a>').attr('href',trec.strTwitter).text("Twitter")
         liEl = $('<li>').append(aEl);
         navMobileEl.append(liEl);
         aEl = $('<a>').attr('href',trec.strYoutube).text("Youtube")
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
        //teamContEl.append(stadiumThumbEl);

       /*
       
      //  nbaTeamEl.append(titleEl);
        teamListEl.append(teamNameEl);
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