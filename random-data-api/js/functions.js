const credit_card_number = document.querySelector('#number')
const credit_card_expiry_date = document.querySelector('#expiry')
const credit_card_type = document.querySelector('#type')
const id = document.querySelector('#id')


const url = 'https://random-data-api.com/api/v2/credit_cards'

const getData = () => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        credit_card_number.innerHTML = json.credit_card_number
        credit_card_expiry_date.innerHTML = json.credit_card_expiry_date
        credit_card_type.innerHTML = json.credit_card_type
        id.innerHTML = json.id
    }).catch(error => {
        alert(error)
    })
}

getData()