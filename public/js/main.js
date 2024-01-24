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
    
   
    // switch (values[index]) {
    //     case "1":
    //         element.style.backgroundImage = "url(../public/img/bbe6f4103563031.5f50b135a0b96.jpg)";
    //         break;
    //     case "2":
    //         element.style.backgroundImage = "url(../public/img/2.jpg)";
    //         break;
    //     case "3":
    //         element.style.backgroundImage = "url(../public/img/3.jpg)";
    //         break;
    //     case "4":
    //         element.style.backgroundImage = "url(../public/img/4.jpg)";
    //         break;
        
    //     default:
            
    //         element.style.backgroundImage = "url('defaultURL')";
    //         break;
    // }
});


    cards.forEach(element => {
        element.addEventListener("click", () => {
        element.classList.toggle("flipped");
        element.classList.toggle("back");
        element.classList.toggle("front");
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
            }else {
                setTimeout(() => {
                    
                    cardArray[0].classList.remove("flipped");
                    cardArray[1].classList.remove("flipped");
                    cardArray = [];
                                
                }, 2000);
                
            }
            

        }
        
        
        });

    });


