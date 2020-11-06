var base_url = " https://api.football-data.org/v2/"
function json(response){
    return response.json();
}
  function error(error) {
    console.log("Error : " + error);
  }     
 
function  getDataBundesLiga(){
  if ("caches" in window) {
    fetch(base_url + "competitions/"+ 2002 + "/standings"
    ,{
        headers: {
        
            'X-Auth-Token': "b1cbc09adafb4fa885b4e06a36de9e1f"
        },
        }).then(function(response) {
          if (response) {
            response.json().then(function(data) {
              let BundesLigaHTML = ""
              BundesLigaHTML = `<tr>
              <th>Pos</th>
              <th class="crest-team"></th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
          </tr>`;
          document.getElementById("head-BundesLiga").innerHTML = BundesLigaHTML;
          var bundesHTML = "";
          let stands = data.standings.filter(function(elem) { return elem.type === "TOTAL"; })
          stands.forEach(function(table) {

              table.table.forEach(function(team) {
                  bundesHTML += `
                  <tr>
                  <td>${team.position}</td>
                  <td class="crest-team"><img width="20px" height="20px" class="responsive-img" src="${team.team.crestUrl}" /></td>
                  <td>${team.team.name}</td>
                  <td>${team.playedGames}</td>
                  <td>${team.won}</td>
                  <td>${team.draw}</td>
                  <td>${team.lost}</td>
                  <td>${team.goalsFor}</td>
                  <td>${team.goalsAgainst}</td>
                  <td>${team.goalDifference}</td>
                 <td>${team.points}</td>
              </tr>
          `;

                        })
                      });
                  console.log(data);
                  document.getElementById("bundesliga").innerHTML = bundesHTML;
            })
              
          }
           
            

        })
  }     
   
                 
};
