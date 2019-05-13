const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Images
let firstimage = document.querySelector("#cta-img");
firstimage.setAttribute("src", "img/header-img.png");

let secondimage = document.querySelector("#middle-img");
secondimage.setAttribute("src", "img/mid-page-accent.jpg");

//navbar
let navcontent = document.querySelector("nav a");
navcontent.textContent = "Services";

let navcontent2 = document.querySelector("nav a:nth-of-type(2)")
navcontent2.textContent = "Product";

let navcontent3 = document.querySelector(" nav a:nth-of-type(3)")
navcontent3.textContent = "Vision"

let navcontent4 = document.querySelector(" nav a:nth-of-type(4)")
navcontent4.textContent = "Features"

let navcontent5 = document.querySelector(" nav a:nth-of-type(5)")
navcontent5.textContent = "About"

let navcontent6 = document.querySelector(" nav a:nth-of-type(6)")
navcontent6.textContent = "Contact"

//top content
let h1 = document.querySelector("h1");
h1.textContent = "DOM Is Awesome"

let button = document.querySelector("button");
button.textContent = "Get Started"

//middleconetent
let heading1 = document.querySelector(".text-content h4")
heading1.textContent = "Features"

let firstContent = document.querySelector(".text-content p")
firstContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let heading2 = document.querySelector(".text-content:nth-of-type(2) h4")
heading2.textContent = "About"

let secondContent = document.querySelector(".text-content:nth-of-type(2) p")
secondContent.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//bottomcontent 
let heading3 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(1) h4");
heading3.textContent = "Services"

let thirdContent = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(1) p")
thirdContent.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let heading4 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) h4");
heading4.textContent = "Product"

let fourthContent = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) p")
fourthContent.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let heading5 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) h4");
heading5.textContent = "Vision"

let fifthContent = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) p")
fifthContent.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//contact

let contact = document.querySelector(".contact h4")
contact.textContent = "Contact"

let paragraph1 = document.querySelector(".contact p:nth-of-type(1)")
paragraph1.textContent = "123 Way 456 Street Somewhere, USA"

let paragraph2 = document.querySelector(".contact p:nth-of-type(2)")
paragraph2.textContent = "1 (888) 888-8888"

let paragraph3 = document.querySelector(".contact p:nth-of-type(3)")
paragraph3.textContent = "sales@greatidea.io"


//footer
let footer = document.querySelector("footer")
footer.textContent = "Copyright Great Idea! 2018"