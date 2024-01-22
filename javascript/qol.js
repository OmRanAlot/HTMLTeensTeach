document.getElementById("forum_div").title = "News";
document.getElementById("study_div").title = "Study";
document.getElementById("community_div").title = "Community";
document.getElementById("home_div").title = "Home";
document.getElementById("mission_div").title = "Mission";
document.getElementById("account_div").title = "Account";

// redirects user to our mission if they click logo @ bottom
let item = document.getElementById("navImage");
item.addEventListener('click',function(){
    window.location.href= "/pages/ourMission.html"

});


