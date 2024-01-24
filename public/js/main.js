let cards = document.querySelectorAll(".card")
let cardArray = [];
let matches = 0;
let values = ["1", "2", "3", "4", "1", "2", "3", "4"];

 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(values);

console.log(matches);

cards.forEach((element, index) => {
    element.dataset.card = values[index];
    

});


cards.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.add("flipped");
        element.classList.remove("back");
        element.classList.add("front");
        cardArray.push(element)
        console.log(cardArray);
        if (cardArray.length == 2){
            if (cardArray[0].dataset.card === cardArray[1].dataset.card){
                matches++;
                cardArray = []
                console.log(matches);
                console.log(cardArray);
            }
            if (matches == cards.length / 2){
                console.log("Congratulations! You won!");
            } else {
                setTimeout(() => {
                    cardArray[0].classList.remove("flipped");
                    cardArray[0].classList.remove("front");
                    cardArray[0].classList.add("back");
                    cardArray[1].classList.remove("flipped");
                    cardArray[1].classList.remove("front");
                    cardArray[1].classList.add("back");
                    cardArray = [];

                }, 2000);
            }
        }
    });
});

