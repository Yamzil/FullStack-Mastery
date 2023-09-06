let fullContainer = document.createElement('div'); // Create a <div> element
fullContainer.classList.add("full-container"); // add a class name to the div
document.body.appendChild(fullContainer); // Append <div> to <body>

let titleDiv = document.createElement('div'); // Create a <div> element
titleDiv.classList.add("title-container"); // add a class name to the div
titleDiv.innerHTML = 'Amzil Restaurant';  // add text to the div
fullContainer.appendChild(titleDiv); // Append <div> to <body>

let menuDiv = document.createElement('nav'); // Create a <nav> element
menuDiv.classList.add("menu-container"); // add a class name to the div

let OrderMenulist = document.createElement('ol'); // Create a <ol> element
OrderMenulist.classList.add("order-menu-list"); // add a class name to the ol
menuDiv.appendChild(OrderMenulist); // Append <ol> to <div>


let LiTagHome = document.createElement('li'); // Create a <li> element
let LiTagMenu = document.createElement('li'); // Create a <li> element
let LiTagContact = document.createElement('li'); // Create a <li> element

OrderMenulist.appendChild(LiTagHome); // Append <li> to <ol>
OrderMenulist.appendChild(LiTagMenu); // Append <li> to <ol>
OrderMenulist.appendChild(LiTagContact); // Append <li> to <ol>

let home = document.createElement('a'); // Create a <a> element
let menu = document.createElement('a'); // Create a <a> element
let contact = document.createElement('a'); // Create a <a> element

home.classList.add("link-home"); // add a class name to the a
menu.classList.add("link-menu"); // add a class name to the a
contact.classList.add("link-contact"); // add a class name to the a

home.innerHTML = 'Home'; // add text to the a
menu.innerHTML = 'Menu'; // add text to the a
contact.innerHTML = 'Contact'; // add text to the aù

home.href = '#linkhome'; // add text to the a
menu.href = '#linkmenu'; // add text to the a
contact.href = '#linkcontact'; // add text to the a

LiTagHome.appendChild(home); // Append <a> to <div>
LiTagMenu.appendChild(menu); // Append <a> to <div>
LiTagContact.appendChild(contact); // Append <a> to <div>
fullContainer.appendChild(menuDiv); // Append <div> to <body>

let SectionDiv = document.createElement('section'); // Create a <section> element
SectionDiv.classList.add("section-container"); // add a class name to the div
SectionDiv.id = "linkhome"; // add a class name to the div
document.body.appendChild(SectionDiv); // Append <div> to <body>
let TitleHome = document.createElement('p')
TitleHome.classList.add("title-home"); // add a class name to the div
let DescriptionMenu = document.createElement('p')
DescriptionMenu.classList.add("description-menu"); // add a class name to the div
TitleHome.innerHTML = 'Welcome to Amzil Restaurant'; // add text to the div
DescriptionMenu.innerHTML =     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys \
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make \
                                a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, \
                                remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing \
                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.nendjken'; // add text to the div
SectionDiv.appendChild(TitleHome); // Append <div> to <body>
SectionDiv.appendChild(DescriptionMenu); // Append <div> to <body>

let Menu = document.createElement('section'); // Create a <section> element
Menu.classList.add("menu"); // add a class name to the div
Menu.id = "linkmenu"; // add a class name to the div
document.body.appendChild(Menu); // Append <div> to <body>
let RestaurantMenu = document.createElement('p')
RestaurantMenu.classList.add("restaurant-menu-title"); // add a class name to the div
RestaurantMenu.innerHTML = 'Restaurant Menu'; // add text to the div
Menu.appendChild(RestaurantMenu); // Append <div> to <body>

let Recipt = document.createElement('section'); // Create a <section> element
Recipt.classList.add("recipt"); // add a class name to the div
Recipt.id = "linkrecipt"; // add a class name to the div
Menu.appendChild(Recipt); // Append <div> to <body>
let ReciptTitle = document.createElement('p')
ReciptTitle.classList.add("recipt-title"); // add a class name to the div
ReciptTitle.innerHTML = 'Recipt'; // add text to the div
Recipt.appendChild(ReciptTitle); // Append <div> to <body>
let ReciptFood = document.createElement('p')
ReciptFood.classList.add("recipt-food"); // add a class name to the div
ReciptFood.innerHTML = 'this is a description foood'; // add text to the div
Recipt.appendChild(ReciptFood); // Append <div> to <body>
let img = document.createElement('img'); // Create a <img> element
img.classList.add("recipt-img"); // add a class name to the div
img.src = "https://www.acouplecooks.com/wp-content/uploads/2022/02/Couscous-004.jpg";
Recipt.appendChild(img); // Append <div> to <body>


let contactSection = document.createElement('section'); // Create a <section> element
contactSection.classList.add("contact-section"); // add a class name to the div
contactSection.id = "linkcontact"; // add a class name to the div
document.body.appendChild(contactSection); // Append <div> to <body>
let contactTitle = document.createElement('p')
contactTitle.classList.add("contact-title"); // add a class name to the div
contactTitle.innerHTML = 'Contact'; // add text to the div
contactSection.appendChild(contactTitle); // Append <div> to <body>
let Phone = document.createElement('p')
Phone.classList.add("phone"); // add a class name to the div
Phone.innerHTML = 'Phone: 06 00 00 00 00'; // add text to the div
contactSection.appendChild(Phone); // Append <div> to <body>
let Email = document.createElement('p')
Email.classList.add("email"); // add a class name to the div
Email.innerHTML = 'Email:	'; // add text to the div
contactSection.appendChild(Email); // Append <div> to <body>
let em = document.createElement('p'); // Create a <a> element
em.classList.add("email"); // add a class name to the a
em.innerHTML = 'Email: xxxx@xxx.com	'; // add text to the a
Email.appendChild(em); // Append <a> to <div>






