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
        if (cardArray.length[0].dataset.element === cardArray.length[1].dataset.element){
            matches++;
            console.log(matches);
        }

    }
    
    });

});


// if the flipped class is .flipped#first1
// let test = document.querySelector("#first1")
// test.addEventListener("click", () => {
//     test.classList.toggle('flipped');
// })

// setTimeout(() => {
//     element.classList.remove("flipped");
// }, 2000);