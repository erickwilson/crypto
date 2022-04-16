async function getContent() {
    try {
        const response = await fetch(' https://api.nomics.com/v1/currencies/ticker?key=60a3f926a3815abee088f22dd3f3cb564c8d4ab8&per-page=10&interval=1h')
            //console.log(response)
        const data = await response.json()
        show(data)
    } catch (error) {
        console.log(error)
    }

}
getContent()

function show(cryptos) {

    let output = ''
    let contador = 1;
    for (let crypto of cryptos) {

        output += `<div id="contador">${contador} - ${crypto.id} - ${crypto.name}</li>`
        output += `<br>`
        output += `<label>Price: $ ${parseFloat(crypto.price).toFixed(2)}</label>`
        output += `</div>`
        output += `<br>`
        contador++;
    }
    document.querySelector('#divTop10').innerHTML = output
}