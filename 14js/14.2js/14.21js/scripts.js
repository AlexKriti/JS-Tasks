let ul = document.createElement('ul');
let body = document.querySelector('body');



fetch('http://api.citybik.es/v2/networks')
.then((response) => {
return response.json();
})
.then((data) => {
    let Array = data.networks;
    for(let item of Array){
        if (item.location.country == 'GB'){
            console.log(item)
            let li = document.createElement('li');
            li.innerText = item.name;
            ul.appendChild(li)
        }
    }
    
});

body.appendChild(ul)