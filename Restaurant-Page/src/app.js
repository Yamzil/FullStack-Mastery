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


let LiTagMenu = document.createElement('li'); // Create a <li> element
let LiTagHome = document.createElement('li'); // Create a <li> element
let LiTagContact = document.createElement('li'); // Create a <li> element

OrderMenulist.appendChild(LiTagMenu); // Append <li> to <ol>
OrderMenulist.appendChild(LiTagHome); // Append <li> to <ol>
OrderMenulist.appendChild(LiTagContact); // Append <li> to <ol>

let home = document.createElement('a'); // Create a <a> element
let menu = document.createElement('a'); // Create a <a> element
let contact = document.createElement('a'); // Create a <a> element

home.classList.add("link-home"); // add a class name to the a
menu.classList.add("link-menu"); // add a class name to the a
contact.classList.add("link-contact"); // add a class name to the a

home.innerHTML = 'Home'; // add text to the a
menu.innerHTML = 'Menu'; // add text to the a
contact.innerHTML = 'Contact'; // add text to the a

LiTagHome.appendChild(home); // Append <a> to <div>
LiTagMenu.appendChild(menu); // Append <a> to <div>
LiTagContact.appendChild(contact); // Append <a> to <div>
fullContainer.appendChild(menuDiv); // Append <div> to <body>

let SectionDiv = document.createElement('section'); // Create a <section> element
SectionDiv.classList.add("section-container"); // add a class name to the div
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

let Menu = document.createElement('div'); // Create a <div> element
Menu.classList.add("menu");
document.body.appendChild(Menu); // Append <div> to <body>



