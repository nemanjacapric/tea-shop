function myFunction() {
    var x = document.getElementById("registracija");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var y = document.getElementById("login");
    if (y.style.display == "block") {
      y.style.display = "none";
    }
}


function myFunction1() {
    var x = document.getElementById("login");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById("registracija");
    if (y.style.display == "block") {
      y.style.display = "none";
    }
  }

