let iframe = document.querySelector('iframe');
let button = document.querySelector('button.toFind');
let input = document.querySelector('input');
let imgArr = document.querySelectorAll('img')



button.addEventListener('click', () => {
    if (input.value) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${input.value}&type=video`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                for(let i = 0; i < data.items.length; i++){
                    imgArr[i].src =  data.items[i].snippet.thumbnails.default.url;
                    imgArr[i].addEventListener('click', ()=>{
                        iframe.src = `https://www.youtube.com/embed/${data.items[i].id.videoId}`;
                    })
                }
                console.log(data.items);
                iframe.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
                console.log(data.items[0].id.videoId);
            });
    } else {
        console.error('Вы не ввели название')
    }

})










// fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=ИСКОМАЯ_ФРАЗА&type=video')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         iframe.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
//         console.log(data.items[0].id.videoId);
//     });