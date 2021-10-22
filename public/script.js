// console.log('This is my javascript file which is gonna run on browser')

const mainJokeButton = document.getElementById('butt')
const mainJokeElement = document.getElementById('joke')

mainJokeButton.addEventListener('click', () => {
    mainJokeElement.innerText = 'LOADING...'
    fetch('/joke').then((response) => {
        response.json().then((data) => {
            mainJokeElement.innerText = data.joke
        }).catch((er) => {
            console.log('Something went wrong please try later 🤗')
        })
    }).catch((e) => {
        console.log('Something went wrong please try later 🤗')
    })

})