// DOM
const formEl = document.getElementById('reddit-form')
const searchEl = document.getElementById('search-term')
const redditEl = document.querySelector('#reddit')



// Function
function handleSubmit(event) {
    event.preventDefault()

    const url = 'http://www.reddit.com/search.json?q='
    fetch(url + searchEl.value + '+nsfw:no')
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            //Dom elements
            let divEl = document.createElement('div')
            
            
            //variables
            let reddit = data.data.children
            // let pics = reddit[i].data.thumbnail
            // let title = reddit[1].data.title
            
            //array
            let slideShow = []
            //Loop into array
            for (let i = 0; i < reddit.length; i++) {
                slideShow.push(reddit[i].data.thumbnail)
            }
           
            //add array images to DOM
            for (let i = 0; i < slideShow.length; i++) {
                let picEl = document.createElement('img')
                picEl.setAttribute('src', slideShow[i])
                //Add to DOM
                redditEl.textContent = ''
                divEl.append(picEl)
                redditEl.append(divEl)

            }
            console.log(slideShow);


        })
}

// event listener
formEl.addEventListener('submit', handleSubmit)