function einstein() {
    let einsteinBio = new XMLHttpRequest();
    einsteinBio.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         let myObj = JSON.parse(this.responseText);
         document.getElementById("einsteinBio").innerHTML = myObj.name + myObj.birthday + myObj.picture;
     }
    
    };
    
    einsteinBio.open("GET", "einstein.json", true);
    einsteinBio.send();
    }
    