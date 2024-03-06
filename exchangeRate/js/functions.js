const url = 'https://api.freecurrencyapi.com/v1/latest'
const base_currency = "SEK"
const api_key = "fca_live_jMGIZ0VlhUPktePdOImS4qLmBp4E9WSf5G3FCgXI"

const input = document.querySelector('input')
const output = document.querySelector('output')
const rate_span = document.querySelector('span')
const convert = document.querySelector('button')

convert.addEventListener('click',() => {
    const address = `${url}?base_currency=${base_currency}&apikey=${api_key}`
    fetch(address)
    .then(response => response.json())
    .then(json => {
        const rate = json.data.EUR
        rate_span.innerHTML = rate
        const sek = input.value
        const eur = sek * rate
        output.innerHTML = eur.toFixed(2) + ' €'
    })
    .catch(error => {
        alert(error)
    })
})