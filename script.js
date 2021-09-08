const factBox = document.querySelector('#fact')
const getFactBtn = document.querySelector('#btn')
let catFacts = [];



fetch('https://codexpression.github.io/catz/catz.json').then(response => {
    console.log(response);
    return response.json();

})
.then(data => {
   let allFacts = data.all
   localStorage.setItem('catFacts',JSON.stringify(allFacts));
//    catFacts = [...allFacts]
})
.catch(err => {
    console.log('You may be having network issues or it\'s possible the URL you supplied is invalid. Plese do check and reload the page. \n', err);
})


function generateFact(){
    let randomNumber = Math.floor(Math.random() *catFacts.length);
    let fact = catFacts[randomNumber];
    factBox.innerHTML = fact.text;
}

getFactBtn.onclick = generateFact;
