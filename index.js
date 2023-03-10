function getCatFact(){
    let endpoint = 'https://catfact.ninja/fact';
    fetch(endpoint)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let catFactDiv = document.getElementById('cat-fact');
            catFactDiv.textContent = data.fact;
        })
}

function getCatImage(){
    let catImg = document.getElementById('cat-img')
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(json => catImg.src = json[0].url)
}

function btnClick(){
    let button = document.getElementById('new-cat-btn')
    button.addEventListener('click', getCatImage)
    button.addEventListener('click', getCatFact)
}


getCatFact()
getCatImage()
btnClick()


