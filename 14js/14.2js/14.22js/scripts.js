let select = document.querySelector('select');
console.log(select)

select.addEventListener('change', () => {
    let ulArr = document.querySelectorAll('ul');
    if (ulArr) {
        for (let ul of ulArr) {
            ul.style.display = 'none';
        }

    }
    fetch('http://api.citybik.es/v2/networks')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let Array = data.networks;
            let body = document.querySelector('body');
            let ul = document.createElement('ul');
            let countryCode = select.value;
            let ArrayUnic = [];
            for (let i = 0; i < Array.length; i++) {////Array[i]
                
                let li = document.createElement('li');
                if (countryCode == Array[i].location.country) {
                    li.innerText = Array[i].name;
                    if(!ArrayUnic.includes(Array[i].name)){
                        ArrayUnic.push(Array[i].name)
                        ul.appendChild(li)
                    }


                }
                
                
            }
          

            body.appendChild(ul)
        });

})

let ul = document.querySelector('ul');
for(let x = 0; x < ul.children.length; x++){
    for(let y = 1; y < ul.children.length; y++){
        console.log('sels')
        if(ul.children[x].innerText == ul.children[y].innerText){
            ul.children[y].style.display = 'none';
            x= x-1;
            y = y-1;
        }
    }
}

//на этапе получения данных записывать компанию в массив с уникальными названиями, только потом добавлять в список