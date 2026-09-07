function showFood(mood) {
    let title = 
    document.getElementById("food-title");

    let text = document.getElementById("food-text");

    if(mood == "angry") {
        title.innerText = "Belive Me You Need Something sweet :) ";

        text.innerText = "Have Some Dark Chocolate Fam!!!";

        document.body.style.backgroundColor = "#FF8A80";
    }

    else if (mood == "sad") {
        title.innerText = "Belive Me You Need Something spicy :) ";

        text.innerText = "Have Some Spicy Chips or Nachos Fam!!!";

        document.body.style.backgroundColor = "#90CAF9";
    }

    else if (mood == "Happy") {
        title.innerText = "Belive Me You Need Something More Happy :) ";

        text.innerText = "Have Some Waffles or Icecream Fam!!!";

        document.body.style.backgroundColor = "#FFE082";
    }

    else if(mood == "chaotic") {
        title.innerText = "Belive Me You Need Something special (Hell yeahhhhhhhhhh) :) ";

        text.innerText = "Have Some dark Chocolate + Chips + Cookies Fam!!!";

        document.body.style.backgroundColor = "#CE93D8";
    }
}



let factButton = document.getElementById("fact");

let facts = [
    "///I always wants a 3D printer///",
    "///I Love Cooking///",
    "///My Fav Anime is One Pieceeeeeee///"
];

factButton.addEventListener("click",function() {
    
    let randomNumber = Math.floor(Math.random() * facts.length);

    document.getElementById("random-fact").innerText = facts[randomNumber];
});




let photoButton = document.getElementById("change_photo");
let photo = document.getElementById("image1");

let firstPhoto = true;

photoButton.addEventListener("click", function () {

    if (firstPhoto === true) {
        photo.src = "image2.jpeg";
        firstPhoto = false;
    }

    else {
        photo.src = "image.png";
        firstPhoto = true;
    }

});