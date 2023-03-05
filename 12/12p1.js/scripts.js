let buttonArr = document.querySelectorAll('.button');
let divArr = document.querySelectorAll('.content');
function clearArr(array) {
    for (let div of array) {
        div.classList.remove(active)
    }
}

function openTab(activeButton, blockId){
    divArr.forEach((div)=>{
        div.classList.remove('active')
    })
    buttonArr.forEach((button)=>{
        button.classList.remove('active');});
    activeButton.classList.add('active');
    div = document.querySelector(`div#${blockId}`);
    div.classList.add('active');
}



buttonArr.forEach((button)=>{
    button.addEventListener('click', event => {
        if (event.target == button) {
            let id = event.target.id;
            divId = `${id}-content`;
            openTab(event.target, divId);
        }
    })
})