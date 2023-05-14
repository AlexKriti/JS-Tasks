fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {// дата это массив ,с которым нужно работать
        for (let i = 0; i < 10; i++) {
            let inArr = data[i];
            let ofName = inArr.name.official;
            let flag = inArr.flags.svg;
            let region = inArr.region;
            let population = +inArr.population;
            let languages = Object.values(inArr.languages);
            let currency = Object.values(Object.values(inArr.currencies))[0].symbol + ' ' + Object.values(Object.values(inArr.currencies))[0].name;
            let string = '';
            population =  Math.round(population/100000)/10;
            for(let i = 0; i < languages.length; i++){
                if(languages[i+1]){
                    let lang = languages[i];
                    string = string + lang + ', ';
                } 
                if(!languages[i+1]){
                    let lang = languages[i];
                    string = string+lang
                }
            }
            console.log(inArr);
            console.log(currency);
            let rowDiv = document.querySelector('div.row');
            rowDiv.innerHTML = rowDiv.innerHTML +  createCards( flag,ofName, region,  population, string, currency);
            // let colDiv = document.createElement('div.col');
            // let cardDiv = document.createElement('div.card');
            // let flagImg = document.createElement('img.card-img-top');
            // let cardBodyDiv = document.createElement('div.card-body');
            // let h5 = document.createElement('h5.card-title');
            // let pRegion = document.createElement('p.region');
            // let pNum = document.createElement('p.number');
            // let pLang = document.createElement('p.language');
            // let pMoney = document.createElement('p.money');


        }
    });
function createCards(flag, countryName, region, population, language, money){
    return `<div class = "col">
    <div class = "card">
    <img src = "${flag}">
    <h2 class="country">${countryName}</h2>
    <p class = "region">${region}</p>

    <div class = "flex">
    <p>	&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;</p>
    <p class='population'>${population} млн</p>
    </div>

    <div class = "flex">
    <p>	&#128483;</p>
    <p class='language'>${language}</p>
    </div>


    <div class = "flex">
    <p>&#128176;</p>
    <p class='money'>${money}</p>
    </div>
    
    </div>
    </div>`
}
