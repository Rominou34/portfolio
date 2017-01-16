var body = document.querySelector("body");

var header = document.querySelector("header");
var logo = document.querySelectorAll("#logo");

//AVATAR
var avatar_cont = document.querySelector("#avatar-container");

//TITLES
var aboutTitle = document.querySelector("#about-title");
var formTitle = document.querySelector("#formation-title");
var compTitle = document.querySelector("#competences-title");
var projTitle = document.querySelector("#projets-title");
var expTitle = document.querySelector("#experiences-title");

//LINKS
var formLink = document.querySelector("#formation-link");
var compLink = document.querySelector("#competences-link");
var projLink = document.querySelector("#projets-link");
var expLink = document.querySelector("#experiences-link");

//SECTIONS
var competences = document.querySelector("#competences");
var formation = document.querySelector("#formation");
var projets = document.querySelector("#projets");
var experiences = document.querySelector("#experiences");

//LOCATIONS
var compY = competences.offsetTop;
var formY = formation.offsetTop;
var projY = projets.offsetTop;
var expY = experiences.offsetTop;

window.addEventListener('scroll', function(e) {
  var scrollY = document.body.scrollTop;
  if(scrollY >= (formY-100)) {
    if(scrollY >= (compY-100)) {
      if(scrollY >= (projY-100)) {
        if(scrollY >= (expY-100)) {
          //EXPERIENCES
          projTitle.style.display = "none";
          aboutTitle.style.display = "none";
          expTitle.style.display = "block";
          expLink.className = "current";
          formLink.className = "";
          projLink.className = "";
          compLink.className = "";
          avatar_cont.className = "experiences";
          body.style.backgroundColor = "#ddf";
          // var op = ((scrollY-projY)/experiences.clientHeight)*4;
          // if(op < 1) {
          //   expTitle.style.opacity = op;
          // } else {
          //   if(op > 3.5) {
          //     expTitle.style.opacity = 1-(op/4);
          //   } else {
          //     expTitle.style.opacity = 1;
          //   }
          // }
        } else {
          //PROJETS
          expTitle.style.display = "none";
          compTitle.style.display = "none";
          projTitle.style.display = "block";
          projLink.className = "current";
          formLink.className = "";
          compLink.className = "";
          expLink.className = "";
          avatar_cont.className = "projets";
          body.style.backgroundColor = "#ddf";
          // var op = ((scrollY-projY)/projets.clientHeight)*4;
          // if(op < 1) {
          //   projTitle.style.opacity = op;
          // } else {
          //   if(op > 3.5) {
          //     projTitle.style.opacity = 1-(op/4);
          //   } else {
          //     projTitle.style.opacity = 1;
          //   }
          // }
        }
      } else {
        //COMPETENCES
        formTitle.style.display = "none";
        projTitle.style.display = "none";
        compTitle.style.display = "block";
        compLink.className = "current";
        formLink.className = "";
        expLink.className = "";
        projLink.className = "";
        avatar_cont.className = "competences";
        body.style.backgroundColor = "#ddf";
        // var op = ((scrollY-compY)/competences.clientHeight)*4;
        // if(op < 1) {
        //   compTitle.style.opacity = op;
        // } else {
        //   if(op > 3.5) {
        //     compTitle.style.opacity = 1-(op/4);
        //   } else {
        //     compTitle.style.opacity = 1;
        //   }
        // }
      }
    } else {
      //FORMATION
      compTitle.style.display = "none";
      formTitle.style.display = "block";
      formLink.className = "current";
      compLink.className = "";
      expLink.className = "";
      projLink.className = "";
      avatar_cont.className = "formation";
      body.style.backgroundColor = "#ddf";
      // var op = ((scrollY-formY)/formation.clientHeight)*4;
      // if(op < 1) {
      //   formTitle.style.opacity = op;
      // } else {
      //   if(op > 3.5) {
      //     formTitle.style.opacity = 1-(op/4);
      //   } else {
      //     formTitle.style.opacity = 1;
      //   }
      // }
    }
  }
  else {
    //ABOUT
    aboutTitle.style.display = "block";
    formTitle.style.display = "none";
    avatar_cont.className = "about";
    body.style.backgroundColor = "#fdd";
    // var op = ((scrollY)/about.clientHeight)*4;
    // if(op > 3.5) {
    //   aboutTitle.style.opacity = 1-(op/4);
    // } else {
    //   aboutTitle.style.opacity = 1;
    // }
  }

  // if(scrollY > 40) {
  //   header.className = "scrolled";
  // } else {
  //   header.className = "";
  // }
});
