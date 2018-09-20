/*
    let einsteinBio = new XMLHttpRequest();
    einsteinBio.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         let myObj = JSON.parse(this.responseText);
         document.getElementById("einsteinBio").innerHTML = myObj.name + myObj.birthday + myObj.picture;
     }
    
    };
    
    einsteinBio.open("GET", "einstein.json", true);
    einsteinBio.send();
    
    
 
    $("MyBtn").click(function(){
        $.getJSON("script.js", function(result){
            $.each(result, function( field){
                $("div").append(field + " " + " " + " " + " ");
            });
        });
    });

*/


function loadDoc() {
const einsteinBio = new XMLHttpRequest();
einsteinBio.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("pic").innerHTML = myObj.pict;
    document.getElementById("name").innerHTML = myObj.name;
    document.getElementById("birthday").innerHTML = myObj.birthday;
    document.getElementById("einsteinBio").innerHTML = myObj.einsteinBio;
  }
};
einsteinBio.open("GET", "einstein.json", true);
einsteinBio.send();
}
