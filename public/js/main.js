let cards = document.querySelectorAll(".card")
let cardArray = [];
let matches = 0;
console.log(matches);


cards.forEach(element => {
    element.addEventListener("click", () => {
    element.classList.toggle("flipped");
    cardArray.push(element)
    console.log(cardArray);
    if (cardArray.length == 2){
        if (cardArray[0].dataset.card === cardArray[1].dataset.card){
            matches++;
            cardArray = []
            console.log(matches);
            console.log(cardArray);
        }
        if (matches == 4){
            console.log("Congratulations!");
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


// if the flipped class is .flipped#first1
// let test = document.querySelector("#first1")
// test.addEventListener("click", () => {
//     test.classList.toggle('flipped');
// })

