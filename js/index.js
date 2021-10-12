import {Product , Inserter} from './Api.js'

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




