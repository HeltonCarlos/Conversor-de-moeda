function mostrar(data){
    var USD = document.getElementById('USD')
    var EUR = document.getElementById('EUR')
    var CAD = document.getElementById('CAD')
    var ARS = document.getElementById('ARS')



    var america = data.USD.ask;
    var europa = data.EUR.ask;
    var canada = data.CAD.ask;
    var libra = data.GBP.ask;

    USD.innerHTML+=`${america}`
    EUR .innerHTML+=`${europa}`
    CAD.innerHTML+=`${canada}`
    GBP.innerHTML+=`${libra}`

}

fetch(`http://economia.awesomeapi.com.br/json/all`)
.then(resp=>{resp.json()
.then(data=>mostrar(data))})
.catch(e=>console.log('ERRO'+e,message))