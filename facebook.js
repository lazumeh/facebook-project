let database = [
{
    username: "Abia",
    password: "Abia1"
},
{
    username: "Adamawa",
    password: "Adamawa1"
},
{
    username: "AkwaIbom",
    password: "AkwaIbom1"
},
{
    username: "Anambra",
    password: "Anambra1"
},
{
    username: "Bauchi",
    password: "Bauchi1"
},
{
    username: "Bayelsa",
    password: "Bayelsa1"
},
{
    username: "Benue",
    password: "Benue1"
},
{
    username: "Borno",
    password: "Borno1"
},
{
    username: "CrossRiver",
    password: "CrossRiver1"
},
{
    username: "Delta",
    password: "Delta1"
}
]

newsfeed=[
{
    username: "Abia",
    timeline: "God's Own State"
},
{
    username: "Adamawa",
    timeline: "Land of Beauty"
},
{
    username: "AkwaIbom",
    timeline: "Land of Promise"
},
{
    username: "Adamawa",
    timeline: "Light of the Nation"
},
{
    username: "Bauchim",
    timeline: "Pearl of Tourism"
},
{
    username: "Bayelsa",
    timeline: "Glory of all Lands"
},
{
    username: "Benue",
    timeline: "Food Basket of the Nation"
},
{
    username: "Borno",
    timeline: "Home of Peace"
},
{
    username: "CrossRiver",
    timeline: "The People's Paradise"
},
{
    username: "Delta",
    timeline: "The Big Heart"
}
]

var us = document.getElementById("user")
us.addEventListener("keypress",function(event){
    if (event.key==="Enter"){
          if(us.value !== ''){
        var x= document.createTextNode("username1");
      }
    }

  });

var pa = document.getElementById("pass")
pa.addEventListener("keypress",function(event){
    if (event.key==="Enter"){
      if(pa.value !== ''){
        var x= document.createTextNode("password1");
      }

    }
  })

var bat = document.getElementById("sign")
bat.addEventListener("click", signIn)
function isUserValid(username, password){
    for (var i= 0; i< database.length; i++){
        if (us.value === database[i].username && pa.value === database[i].password) {return true}
}
return false;
}
function signIn(username, password){
    if (isUserValid(username, password) === true){
    for(var i=0; i<=newsfeed.length; i++){
        if (us.value=== newsfeed[i].username){
  alert (newsfeed[i].timeline)
  break;
        }
    }
}
    else{alert("incorrect parameters")}

}
signIn(userName, passWord)
