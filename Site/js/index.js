//"use strict";
/*
//Router
window.onload=function(){
  var Router = function(name, routes){
    return{
      name: name,
      routes: routes
    }
  };

  var siteRouter = new Router('my first router', [
    {path: '/',
    name: 'Root'},
    {path: '/blog',
    name:'Blog'},
    {path:'/resume',
    name: 'Resume'},
    {path: '/portfolio',
    name:'Portfolio'}
  ]);
  var currentPath = window.location.pathname;
  if(currentPath === '/'){

  } else if
}
*/
//Nav bar
let resumeNav = document.querySelector("#resumeNav");
let portfolioNav = document.querySelector("#portfolioNav");
let blogNav = document.querySelector("#blogNav");
let contactBtn = document.querySelector("#contactBtn");
let contactBtnMbl = document.querySelector("#contactBtnMbl");

//Pop Ups
let glassOverlay = document.querySelector("#glassOverlay");
let contactOverlay = document.querySelector("#contactOverlay");
let contactCloseBtn = document.querySelector("#contactCloseBtn");
let contactForm = document.querySelector("#contactForm");

//Site contents
let portfolioContent = document.querySelector("#portfolio");
let resumeContent = document.querySelector("#resume");
let blogContent = document.querySelector("#blog");

let allContents = document.querySelectorAll(".content");

//Top Button
let topButton = document.querySelector("#topButton");

//RESUME
//Expand buttons
let educEx = document.querySelector("#eduEx");
let cvEx = document.querySelector("#cvEx");
let workEx = document.querySelector("#workEx");
let volEx = document.querySelector("#volEx");

//Contents
let eduContent = document.querySelector("#eduContent");
let cvContent = document.querySelector("#cvContent");
let workContent = document.querySelector("#workContent");
let volContent = document.querySelector("#volContent");

//PORTFOLIO
//Portfolio Selectors
let uberSelector = document.querySelector("#uber");
let pokeSelector = document.querySelector("#poke");
let shareSelector = document.querySelector("#share");
let consSelector = document.querySelector("#cons");
let knoSelector = document.querySelector("#kno");
let deathSelector = document.querySelector("#death");
let instSelector = document.querySelector("#inst");
let headSelector = document.querySelector("#head");

let allSelectors = document.querySelectorAll(".proj-img");

//Portfolio cards
let uberCards = document.querySelector("#uber-cards");
let pokeCards = document.querySelector("#poke-cards");
let shareCards = document.querySelector("#share-cards");
let consCards = document.querySelector("#cons-cards");
let knoCards = document.querySelector("#kno-cards");
let deathCards = document.querySelector("#death-cards");
let instCards = document.querySelector("#inst-cards");
let headCards = document.querySelector("#head-cards");

let allCards = document.querySelectorAll(".project");

//BLOG
//Expand Buttons
let pizzaEx = document.querySelector("#pizzaEx");
//Contents
let pizzaContent = document.querySelector("#pizzaContent");

//Reset the content
function contentReset() {
  allContents.forEach((cont) => {
    cont.classList.add("hide");
    window.scrollTo(0, 0);
  });
}

//Navigation bar
resumeNav.addEventListener("click", function () {
  resumeNav.classList.add("current");
  portfolioNav.classList.remove("current");
  blogNav.classList.remove("current");
  contentReset();
  resumeContent.classList.remove("hide");
  window.scrollTo(0, 0);
});

portfolioNav.addEventListener("click", function () {
  resumeNav.classList.remove("current");
  portfolioNav.classList.add("current");
  blogNav.classList.remove("current");
  contentReset();
  portfolioContent.classList.remove("hide");
  window.scrollTo(0, 0);
});

blogNav.addEventListener("click", function () {
  resumeNav.classList.remove("current");
  portfolioNav.classList.remove("current");
  blogNav.classList.add("current");
  contentReset();
  blogContent.classList.remove("hide");
  window.scrollTo(0, 0);
});

//Contact Overlay
contactBtn.addEventListener("click", function () {
  glassOverlay.classList.toggle("hide");
  contactOverlay.classList.toggle("hide");
});

contactBtnMbl.addEventListener("click", function () {
  glassOverlay.classList.toggle("hide");
  contactOverlay.classList.toggle("hide");
});

contactCloseBtn.addEventListener("click", function () {
  glassOverlay.classList.toggle("hide");
  contactOverlay.classList.toggle("hide");
});
glassOverlay.addEventListener("click", function () {
  glassOverlay.classList.toggle("hide");
  contactOverlay.classList.add("hide");
});

//Top button mechanics
window.onscroll = function () {
  scrollFunction();
}; //Whenever the user scrolls it checks

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    topButton.classList.remove("hide");
  } else {
    topButton.classList.add("hide");
  }
}

topButton.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Resume Expand Buttons to content
educEx.addEventListener("click", function () {
  eduContent.classList.toggle("hide");
  eduEx.classList.toggle("flipped");
});

cvEx.addEventListener("click", function () {
  cvContent.classList.toggle("hide");
  cvEx.classList.toggle("flipped");
});

workEx.addEventListener("click", function () {
  workContent.classList.toggle("hide");
  workEx.classList.toggle("flipped");
});

volEx.addEventListener("click", function () {
  volContent.classList.toggle("hide");
  volEx.classList.toggle("flipped");
});

//Blog Expand Buttons to content
pizzaEx.addEventListener("click", function () {
  pizzaContent.classList.toggle("hide");
  pizzaEx.classList.toggle("flipped");
});

//Project image selectors
//remove selected from all selectors
function removeAllSelected() {
  allSelectors.forEach((node) => {
    node.classList.remove("selected");
  });
}

//All the selectors clicks
uberSelector.addEventListener("click", function () {
  removeAllSelected();
  console.log(allSelectors);
  uberSelector.classList.add("selected");
  removeAllCards();
  uberCards.classList.remove("hide");
});

pokeSelector.addEventListener("click", function () {
  removeAllSelected();
  console.log(allSelectors);
  pokeSelector.classList.add("selected");
  removeAllCards();
  pokeCards.classList.remove("hide");
});

shareSelector.addEventListener("click", function () {
  removeAllSelected();
  console.log(allSelectors);
  shareSelector.classList.add("selected");
  removeAllCards();
  shareCards.classList.remove("hide");
});

consSelector.addEventListener("click", function () {
  removeAllSelected();
  console.log(allSelectors);
  consSelector.classList.add("selected");
  removeAllCards();
  consCards.classList.remove("hide");
});

knoSelector.addEventListener("click", function () {
  removeAllSelected();
  console.log(allSelectors);
  knoSelector.classList.add("selected");
  removeAllCards();
  knoCards.classList.remove("hide");
});

deathSelector.addEventListener("click", function () {
  removeAllSelected();
  console.log(allSelectors);
  deathSelector.classList.add("selected");
  removeAllCards();
  deathCards.classList.remove("hide");
});

instSelector.addEventListener("click", function () {
  removeAllSelected();
  console.log(allSelectors);
  instSelector.classList.add("selected");
  removeAllCards();
  instCards.classList.remove("hide");
});

headSelector.addEventListener("click", function () {
  removeAllSelected();
  console.log(allSelectors);
  headSelector.classList.add("selected");
  removeAllCards();
  headCards.classList.remove("hide");
});

//Remove all cards
function removeAllCards() {
  allCards.forEach((node) => {
    node.classList.add("hide");
  });
}

//Contact Form Submission
contactForm.addEventListener("submit", function (event) {
  let error = document.querySelector("#error");
  let name = document.querySelector("#nameInput").value;
  let message = document.querySelector("#messageInput").value;
  if (name.includes("@") && name.includes(".")) {
    // document.querySelector("#nameInput").value = "";
    message = document.querySelector("#messageInput") = "";
    if (!error.classList.contains("hide")) {
      error.classList.add("hide");
    }
  } else {
    event.preventDefault();
    error.classList.remove("hide");
  }
});
