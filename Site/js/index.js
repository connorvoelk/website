'use strict'
//Nav bar
let resumeNav = document.querySelector("#resumeNav");
let portfolioNav = document.querySelector("#portfolioNav");
let blogNav = document.querySelector("#blogNav");
let contactBtn = document.querySelector("#contactBtn");

/*Pop Ups*/
let glassOverlay = document.querySelector("#glassOverlay");
let contactOverlay = document.querySelector("#contactOverlay");
let contactCloseBtn = document.querySelector("#contactCloseBtn");

//Site contents
let portfolioContent = document.querySelector("#portfolio");
let resumeContent = document.querySelector("#resume");
let bloglioContent = document.querySelector("#blog");

let allContents = document.querySelectorAll(".content");

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

//Reset the content
function contentReset() {
    allContents.forEach(cont => {
        cont.classList.add("hide");
    })
}


//Navigation bar
resumeNav.addEventListener("click", function () {
    resumeNav.classList.add("current");
    portfolioNav.classList.remove("current");
    blogNav.classList.remove("current");
    contentReset();
    resumeContent.classList.remove("hide");
})

portfolioNav.addEventListener("click", function () {
    resumeNav.classList.remove("current");
    portfolioNav.classList.add("current");
    blogNav.classList.remove("current");
    contentReset();
    portfolioContent.classList.remove("hide");
})

blogNav.addEventListener("click", function () {
    resumeNav.classList.remove("current");
    portfolioNav.classList.remove("current");
    blogNav.classList.add("current");
    contentReset();
    blogContent.classList.remove("hide");
})

//Contact Overlay
contactBtn.addEventListener("click", function () {
    glassOverlay.classList.toggle("hide");
    contactOverlay.classList.toggle("hide");
})

contactCloseBtn.addEventListener("click", function () {
    glassOverlay.classList.toggle("hide");
    contactOverlay.classList.toggle("hide");
})
glassOverlay.addEventListener("click", function () {
    glassOverlay.classList.toggle("hide");
    contactOverlay.classList.add("hide");
})

//Project image selectors
//remove selected from all selectyors
function removeAllSelected() {
    allSelectors.forEach(node => {
        node.classList.remove("selected");
    })
}

//All the selectors clicks
uberSelector.addEventListener("click", function () {
    removeAllSelected();
    console.log(allSelectors);
    uberSelector.classList.add("selected");
    removeAllCards();
    uberCards.classList.remove("hide");
})

pokeSelector.addEventListener("click", function () {
    removeAllSelected();
    console.log(allSelectors);
    pokeSelector.classList.add("selected");
    removeAllCards();
    pokeCards.classList.remove("hide");
})

shareSelector.addEventListener("click", function () {
    removeAllSelected();
    console.log(allSelectors);
    shareSelector.classList.add("selected");
    removeAllCards();
    shareCards.classList.remove("hide");
})

consSelector.addEventListener("click", function () {
    removeAllSelected();
    console.log(allSelectors);
    consSelector.classList.add("selected");
    removeAllCards();
    consCards.classList.remove("hide");
})

knoSelector.addEventListener("click", function () {
    removeAllSelected();
    console.log(allSelectors);
    knoSelector.classList.add("selected");
    removeAllCards();
    knoCards.classList.remove("hide");
})

deathSelector.addEventListener("click", function () {
    removeAllSelected();
    console.log(allSelectors);
    deathSelector.classList.add("selected");
    removeAllCards();
    deathCards.classList.remove("hide");
})

instSelector.addEventListener("click", function () {
    removeAllSelected();
    console.log(allSelectors);
    instSelector.classList.add("selected");
    removeAllCards();
    instCards.classList.remove("hide");
})

headSelector.addEventListener("click", function () {
    removeAllSelected();
    console.log(allSelectors);
    headSelector.classList.add("selected");
    removeAllCards();
    headCards.classList.remove("hide");
})

//Removbe all cards

function removeAllCards() {
    allCards.forEach(node => {
        node.classList.add("hide");
    })
}