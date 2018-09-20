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



let einsteinBio = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("pic").innerHTML = myObj.pict;
    document.getElementById("name").innerHTML = myObj.name;
    document.getElementById("bday").innerHTML = myObj.birthday;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

