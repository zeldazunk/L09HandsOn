
let einBio = new XMLHttpRequest();
einBio.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("einText").innerHTML = myObj.name + "'s Birthday is " + myObj.birthday;
  }

};
einBio.open("GET", "einstein.json", true);
einBio.send();

let einBioFull = new XMLHttpRequest();
einBioFull.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj1 = JSON.parse(this.responseText);
    document.getElementById("myBtn").addEventListener("click", function () {
      document.getElementById("einFullBio").innerHTML = myObj1.bio;
    })
  }

};

einBioFull.open("GET", "einstein.json", true);
einBioFull.send();

/*

function loadDoc() {
const einBio = new XMLHttpRequest();
einBio.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = myObj.name;
    document.getElementById("birthday").innerHTML = myObj.birthday;
    document.getElementById("picture").innerHTML = myObj.picture;
    document.getElementById("einBio").innerHTML = myObj.einsteinBio;
  }
};
einsteinBio.open("GET", "einstein.json", true);
einsteinBio.send();
}
*/