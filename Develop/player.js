
var teamListEl = $('#team_list');
var teamContEl = $('.container');



var playerDB =[];






function getPlayers(team, player) {   /// Not used on this page
    // var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Atlanta_Hawks&p=Cam_Reddish';
     //var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34168021';
     var requestUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+team+'&p='+player;
     console.log(requestUrl);

     fetch(requestUrl)
         .then(function (response) {
             return response.json();
         })
         .then(function (data) {
             console.log("teamDB: ", data);
             if(data.player == null){
                 alert("No data available for the given criteria.");
                 window.history.back();
                 return false;
             }
            playerDB = data;
             dispPlayer();
         });
 }
 function dispPlayer() {
    console.log(playerDB);
    var trec = playerDB.player[0]; /// Individual team record
        var httPrefix = "https://";
         console.log(trec);
         
         $('#banner').attr('src',trec.strThumb)

        
       /*  var cityEl = $('#city').text(trec.strStadiumLocation+", "+trec.strCountry);
         var sinceEl = $('#since').text("Since "+trec.intFormedYear);
         $('#city_info').append(cityEl, sinceEl);

         $('#team_desc').text(trec.strDescriptionEN);
        
        $('#badge').attr('src',trec.strTeamBadge)
        
         $('#banner').attr('src',trec.strTeamBanner)
        
        $('#jersey').attr('src',trec.strTeamJersey)
        
        $('#team_stadium').text(trec.strStadium);
       
        $('#stadium_loc').text(trec.strStadiumLocation);
       
        $('#stadium_desc').text(trec.strStadiumDescription);
      
        $('#stadium_thumb').attr('src', trec.strStadiumThumb)
    */
}
function getParams() {
    var searchParamsArr = document.location.search.split('&');
  
    // Get the team index and teamid values
    var team = searchParamsArr[0].split('=').pop();
    var player = searchParamsArr[1].split('=').pop();
    getPlayers(team, player);
    
    //getTeamDet(teamId);
  }
 getParams();
 /*
 dateBorn: "1999-09-01"

idPlayer: "34168021"

intLoved: "0"
strBirthLocation: "Norristown, Pennsylvania"
strDescriptionEN: "Cameron Elijah Reddish (born September 1, 1999) is an American professional basketball player for the Atlanta Hawks of the National Basketball Association (NBA). He played college basketball for the Duke Blue Devils. He was selected 10th overall by the Atlanta Hawks in the first round of the 2019 NBA draft.
↵Coming out of high school, Reddish was rated as a five-star recruit and considered one of the top players in his class, earning Mr. Pennsylvania Basketball in his senior year, in addition to being named to the 2018 McDonald's All-American Boys Game, 2018 Jordan Brand Classic and 2018 Nike Hoop Summit."

strGender: "Male"
strHeight: "6 ft 8 in"
strInstagram: ""
strKit: ""
strLocked: "unlocked"
strNationality: "United States"
strNumber: ""
strOutfitter: ""
strPlayer: "Cam Reddish"
strPosition: "Small Forward"

strSide: ""
strSigning: ""
strSport: "Basketball"
strTeam: "Atlanta Hawks"

strThumb: "https://www.thesportsdb.com/images/media/player/thumb/hvrlvn1585171075.jpg"

strWeight: "207"
strYoutube: ""
 */