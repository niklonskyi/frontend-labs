const clickableListElement = document.getElementById(
  "list-element-clickable-by-id"
);
const clickableListElementByClass = document.querySelector(
  ".list-element-clickable-by-class"
);

const imageContainer = document.getElementById("image-container");
const mainImage = document.getElementById("main-image");

const addButon = document.getElementById("add-button");
const scaleUpButton = document.getElementById("scaleup-button");
const scaleDownButton = document.getElementById("scaledown-button");
const deleteButton = document.getElementById("delete-button");

addButon.addEventListener("click", () => {
  const newImage = document.createElement("img");
  newImage.src =
    mainImage.src;
  imageContainer.appendChild(newImage);
});

scaleUpButton.addEventListener('click', () => {
  imageContainer.lastChild.width *= 2
})

scaleDownButton.addEventListener('click', () => {
  imageContainer.lastChild.width /= 2
})

deleteButton.addEventListener('click', () => {
  imageContainer.removeChild(imageContainer.lastChild)
})

function handleClick(color, backgroundColor) {
  let isClicked = false;
  return function () {
    if (!isClicked) {
      this.style.backgroundColor = backgroundColor;
      this.style.color = color;
      isClicked = true;
    } else changeColors(clickableListElement, clickableListElementByClass);
  };
}

clickableListElement.addEventListener("click", handleClick("white", "purple"));

clickableListElementByClass.addEventListener(
  "click",
  handleClick("white", "green")
);

function changeColors(firstElement, secondElement) {
  [
    firstElement.style.color,
    firstElement.style.backgroundColor,
    secondElement.style.color,
    secondElement.style.backgroundColor,
  ] = [
    secondElement.style.color,
    secondElement.style.backgroundColor,
    firstElement.style.color,
    firstElement.style.backgroundColor,
  ];
}
