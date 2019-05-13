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
firstimage.setAttribute("src", siteContent.cta["img-src"]);

let secondimage = document.querySelector("#middle-img");
secondimage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//navbar
let navcontent = document.querySelector("nav a");
navcontent.textContent = siteContent.nav["nav-item-1"];

let navcontent2 = document.querySelector("nav a:nth-of-type(2)")
navcontent2.textContent = siteContent.nav["nav-item-2"];

let navcontent3 = document.querySelector(" nav a:nth-of-type(3)")
navcontent3.textContent = siteContent.nav["nav-item-3"]

let navcontent4 = document.querySelector(" nav a:nth-of-type(4)")
navcontent4.textContent = siteContent.nav["nav-item-4"]

let navcontent5 = document.querySelector(" nav a:nth-of-type(5)")
navcontent5.textContent = siteContent.nav["nav-item-5"]

let navcontent6 = document.querySelector(" nav a:nth-of-type(6)")
navcontent6.textContent = siteContent.nav["nav-item-6"]

//top content
let h1 = document.querySelector("h1");
h1.setAttribute('style', 'white-space: pre;');
h1.textContent = "DOM\r\nIs\r\nAwesome"

let button = document.querySelector("button");
button.textContent = siteContent.cta.button

//middleconetent
let heading1 = document.querySelector(".text-content h4")
heading1.textContent = siteContent["main-content"]["features-h4"]

let firstContent = document.querySelector(".text-content p")
firstContent.textContent = siteContent["main-content"]["features-content"]

let heading2 = document.querySelector(".text-content:nth-of-type(2) h4")
heading2.textContent = siteContent["main-content"]["about-h4"]

let secondContent = document.querySelector(".text-content:nth-of-type(2) p")
secondContent.textContent = siteContent["main-content"]["about-content"]

//bottomcontent 
let heading3 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(1) h4");
heading3.textContent = siteContent["main-content"]["services-h4"]

let thirdContent = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(1) p")
thirdContent.textContent = siteContent["main-content"]["services-content"]

let heading4 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) h4");
heading4.textContent = siteContent["main-content"]["product-h4"]

let fourthContent = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) p")
fourthContent.textContent = siteContent["main-content"]["product-content"]

let heading5 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) h4");
heading5.textContent = siteContent["main-content"]["vision-h4"]

let fifthContent = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) p")
fifthContent.textContent = siteContent["main-content"]["vision-content"]

//contact

let contact = document.querySelector(".contact h4")
contact.textContent = siteContent.contact["contact-h4"]

let paragraph1 = document.querySelector(".contact p:nth-of-type(1)")
paragraph1.textContent = siteContent.contact.address

let paragraph2 = document.querySelector(".contact p:nth-of-type(2)")
paragraph2.textContent = siteContent.contact.phone

let paragraph3 = document.querySelector(".contact p:nth-of-type(3)")
paragraph3.textContent = siteContent.contact.email


//footer
let footer = document.querySelector("footer")
footer.textContent = siteContent.footer.copyright




let anchor = document.querySelectorAll("a");
anchor.forEach(element => {
  element.style.color = "green"
})

//task 3
let createanchor = document.createElement('a') 
document.querySelector('nav').appendChild(createanchor)
createanchor.textContent ='Learn more' 
createanchor.href ='https://www.w3schools.com/js/js_htmldom.asp';
createanchor.setAtrribute('id','firstLink')

let newItem = document.createElement("a");  
   
let parent = document.querySelector('header')
parent.prepend("hello", newItem)
newItem.setAtrribute('id','secondLink')
