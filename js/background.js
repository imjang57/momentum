const images = [
    "beach.png",
    "liverpool-0405-champions-league-winning-ceremony.png",
    "surfing.png",
];

const chosenImageIndex = Math.floor(Math.random() * images.length);
const chosenImage = images[chosenImageIndex];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
