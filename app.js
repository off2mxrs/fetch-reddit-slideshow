// DOM
const formEl = document.getElementById('reddit-form')
const searchEl = document.getElementById('search-term')
const redditEl = document.querySelector('#reddit')

// pics array

// Function
function handleSubmit(event) {
    event.preventDefault()

    const url = 'http://www.reddit.com/search.json?q='
    fetch(url + searchEl.value + '+nsfw:no')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            //variables
            let reddit = data.data.children
            // console.log(pics.title);
            console.log(reddit[0]);
            
            let title = reddit[0].data.title
            console.log(title);

            let pics = reddit[0].data.thumbnail
            console.log(pics);


        })
}

// event listener
formEl.addEventListener('submit', handleSubmit)