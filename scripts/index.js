// HOME return
const homeEl = document.getElementById("home");
const navHomeEl = document.getElementById("nav-home");

navHomeEl.addEventListener("click", homeScroll);

function homeScroll() {
    homeEl.scrollIntoView({behavior: "smooth"});
}

// ABOUT ME navigation
const aboutEl = document.getElementById("about-me");
const navAboutEl = document.getElementById("nav-about-me");

navAboutEl.addEventListener("click", aboutScroll);

function aboutScroll() {
    aboutEl.scrollIntoView({behavior: "smooth"});
}

// DESIGN navigation
const designEl = document.getElementById("design");
const navDesignEl = document.getElementById("nav-design");

navDesignEl.addEventListener("click", designScroll);

function designScroll() {
    designEl.scrollIntoView({behavior: "smooth"});
}

// PROMO navigation
const promoEl = document.getElementById("promo");
const navPromoEl = document.getElementById("nav-promo");

navPromoEl.addEventListener("click", promoScroll);

function promoScroll() {
    promoEl.scrollIntoView({behavior: "smooth"});
}
