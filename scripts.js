var body = document.querySelector("body");

var header = document.querySelector("header");

//TITLES
var aboutTitle = document.querySelector("#about-title");
var formTitle = document.querySelector("#formation-title");
var compTitle = document.querySelector("#competences-title");
var projTitle = document.querySelector("#projets-title");
var expTitle = document.querySelector("#experiences-title");

var competences = document.querySelector("#competences");
var formation = document.querySelector("#formation");
var projets = document.querySelector("#projets");

var compY = competences.offsetTop;
var formY = formation.offsetTop;
var projY = projets.offsetTop;

window.addEventListener('scroll', function(e) {
  var scrollY = document.body.scrollTop;
  if(scrollY >= (formY)) {
    if(scrollY >= (compY)) {
      if(scrollY >= (projY)) {
        //PROJETS
        aboutTitle.style.display = "none";
        compTitle.style.display = "none";
        projTitle.style.display = "block";
        body.style.backgroundColor = "#ddf";
        var op = ((scrollY-projY)/projets.clientHeight)*4;
        if(op < 1) {
          projTitle.style.opacity = op;
        } else {
          if(op > 3.5) {
            projTitle.style.opacity = 1-(op/4);
          } else {
            projTitle.style.opacity = 1;
          }
        }
      } else {
        //COMPETENCES
        formTitle.style.display = "none";
        projTitle.style.display = "none";
        compTitle.style.display = "block";
        body.style.backgroundColor = "#ddf";
        var op = ((scrollY-compY)/competences.clientHeight)*4;
        if(op < 1) {
          compTitle.style.opacity = op;
        } else {
          if(op > 3.5) {
            compTitle.style.opacity = 1-(op/4);
          } else {
            compTitle.style.opacity = 1;
          }
        }
      }
    } else {
      //FORMATION
      aboutTitle.style.display = "none";
      compTitle.style.display = "none";
      formTitle.style.display = "block";
      body.style.backgroundColor = "#ddf";
      var op = ((scrollY-formY)/formation.clientHeight)*4;
      if(op < 1) {
        formTitle.style.opacity = op;
      } else {
        if(op > 3.5) {
          formTitle.style.opacity = 1-(op/4);
        } else {
          formTitle.style.opacity = 1;
        }
      }
    }
  }
  else {
    //ABOUT
    aboutTitle.style.display = "block";
    formTitle.style.display = "none";
    body.style.backgroundColor = "#fdd";
    var op = ((scrollY)/about.clientHeight)*4;
    if(op > 3.5) {
      aboutTitle.style.opacity = 1-(op/4);
    } else {
      aboutTitle.style.opacity = 1;
    }
  }

  if(scrollY > 40) {
    header.style.backgroundColor = "#08f";
    header.style.color = "#fff";
  } else {
    header.style.backgroundColor = "rgba(0,0,0,0)";
    header.style.color = "#000";
  }
});
