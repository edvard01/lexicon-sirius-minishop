function swapFirstHoodieName() {
  const parentElement = document.querySelector(".art-1").children;
  parentElement[2].innerHTML = "Potato";
}

function navManipulation() {
  const navList = document.getElementsByTagName("nav")[0].children;
  navList[0].innerHTML = "Start";
  navList[2].innerHTML = "Mail Us";
}

function editFireInfo() {
  const hoodie = document.getElementsByClassName("art-2")[0].children;
  hoodie[3].innerHTML =
    "Red hoodie of high quality with a soft and comfortable design";
}

function changeButtonBg(btnIndex) {
  const button = document.getElementsByTagName("button")[btnIndex];
  button.style.backgroundColor = "red";
}

function changeProductBg() {
  const element = document.getElementsByClassName("art-1")[0];
  element.style.backgroundColor = "lightblue";
}

function changeAddress() {
  const section = document.getElementsByTagName("footer")[0].children[0];
  const articles = section.children;
  articles[1].children[1].innerHTML =
    "Sinus skateboards <br>Drottninggatan 13 <br>123 45, Tonyhöksbyn";
}

function changeAllParagraphColor() {
  const paragraphs = document.getElementsByTagName("p");
  for (index = 0; index < paragraphs.length; index++) {
    paragraphs[index].style.color = "rgb(244, 182, 10)";
  }
}

function changeBtnText() {
  const buttons = document.getElementsByTagName("button");
  for (index = 0; index < buttons.length; index++) {
    buttons[index].innerHTML = "add to cart";
  }
}

function activateNav(index) {
  const navList = document.getElementsByTagName("nav")[0].children;
  navList[index].classList.add("active");
}

function removeLogoClass() {
  const header = document.getElementsByTagName("header")[0].children;
  header[0].classList.remove("logo");
}

function addNavItem() {
  let newNavItem = document.createElement("a");
  let newNavText = document.createTextNode("Cart");
  newNavItem.appendChild(newNavText);

  let navList = document.querySelector("nav");

  navList.insertBefore(newNavItem, navList.children[3]);
}

swapFirstHoodieName();
navManipulation();
editFireInfo();
changeButtonBg(1);
changeProductBg();
changeAddress();
changeAllParagraphColor();
changeBtnText();
activateNav(0);
removeLogoClass();
addNavItem();
