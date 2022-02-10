$(document).ready(function () {
  console.log("Doc's Ready");
 
  let revName; 
  $
    ("#btnGetFacts").click(function (){

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 
      
      $("#coolNameFactsOutput").html(coolFacts);
    });
});

function generateCoolNameFacts(userName) {
  let coolFacts = '';
  coolFacts = nameLength(userName);
  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

