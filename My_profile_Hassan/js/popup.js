const image = document.querySelectorAll(".work__img img");
const mainContainer = document.querySelector(".main-image");
const secondImage = mainContainer.querySelector("img");
const text = mainContainer.querySelector(".text");

image.forEach((img, index) => {
    img.addEventListener("click", () => {
        mainContainer.style.opacity = 1;
        mainContainer.style.pointerEvents = "all";
        secondImage.src = image[index].src;
        text.innerHTML = image[index].alt;
    });
});

mainContainer.addEventListener("click", () => {
    mainContainer.style.opacity = 0;
    mainContainer.style.pointerEvents = "none";
})
