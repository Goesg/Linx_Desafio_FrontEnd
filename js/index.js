import {Product , Inserter} from './Api.js' 

import {checkerEmail , checkerCpf} from './Validation.js'

// a função useApi se utiliza das classes importadas para 
// fazer o consumo da api e renderizar as fileiras de produtos no html
const useApi = async (url)=>{
    try{
        let productsApi = await Product.getProducts(url)
        let {products1,products2} = await productsApi
        $('.containerProducts').prepend(`<div class="rowProducts" id="rowProducts1"></div>`)
        $('.containerProducts').append(`<div class="rowProducts" id="rowProducts2"></div>`)
        Inserter.inserIntoHtml('#rowProducts1',products1)
        Inserter.inserIntoHtml('#rowProducts2',products2)   
    }catch(err){console.log(err)}
}
useApi("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")

// ao clicar no botao ele faz o consumo da api, altera o display dos botoes e
// insere novas fileiras de produtos no html.
$('.buttonMoreProductions').click( async ()=>{
    try{
        let productsApi = await Product.getProducts("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2")
        let {products1,products2} = await productsApi
        $('.buttonMoreProductions').css('display','none')
        $('.buttonSeeLess').css('display','block')
        $('.containerProducts').append(`<div class="rowProducts" id="rowProducts3"></div>`)
        $('.containerProducts').append(`<div class="rowProducts" id="rowProducts4"></div>`)
            Inserter.inserIntoHtml('#rowProducts3',products1)
            Inserter.inserIntoHtml('#rowProducts4',products2)    
    }catch(err){console.log(err)}
})

// ao clicar no botao ele altera o display dos botoes e
// remove as fileiras extras de produtos inseridas no html anteriormente.
$('.buttonSeeLess').click(()=>{
    $('#rowProducts3').remove()
    $('#rowProducts4').remove()
    $('.buttonSeeLess').css('display','none')
    $('.buttonMoreProductions').css('display','block')
})

// ao tirar o foco do input ele valida o email do usuario
$('#inputEmail').blur( async ()=>{
    try{
        let email = await $('#inputEmail').val()
        let resultEmail = await checkerEmail.checkerEmail(email)
        if (resultEmail) alert(resultEmail)
    }catch(err){console.log(err)}
})

// ao tirar o foco do input ele valida o email do usuario
$('#inputEmailShare').blur( async ()=>{
    try{
        let email = await $('#inputEmailShare').val()
        let resultEmail = await checkerEmail.checkerEmail(email)
        if (resultEmail) alert(resultEmail)
    }catch(err){console.log(err)}
})

// ao tirar o foco do input ele valida o cpf do usuario
$('#inputCpf').blur( async ()=>{
    try{
        let cpf = await $('#inputCpf').val()
        let resultCpf = await checkerCpf.checkerCpf(cpf)
        if (resultCpf) alert(resultCpf)
    }catch(err){console.log(err)}
})



