import {Product , Inserter} from './Api.js'

let main = async ()=>{
    try{
        let productsApi = await Product.getProducts("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
        let {products1,products2} = await productsApi
        $('.containerProducts').prepend(`<div class="rowProducts" id="rowProducts1"></div>`)
        $('.containerProducts').append(`<div class="rowProducts" id="rowProducts2"></div>`)
        Inserter.inserIntoHtml('#rowProducts1',products1)
        Inserter.inserIntoHtml('#rowProducts2',products2)   
    }catch(err){console.log(err)}
}
main()

$('.buttonMoreProductions').click(async()=>{
    let productsApi = await Product.getProducts("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2")
    let {products1,products2} = await productsApi
    $('.buttonMoreProductions').css('display','none')
    $('.buttonSeeLess').css('display','block')
    $('.containerProducts').append(`<div class="rowProducts" id="rowProducts3"></div>`)
    $('.containerProducts').append(`<div class="rowProducts" id="rowProducts4"></div>`)
        Inserter.inserIntoHtml('#rowProducts3',products1)
        Inserter.inserIntoHtml('#rowProducts4',products2)    
})

$('.buttonSeeLess').click(()=>{
    $('#rowProducts3').remove()
    $('#rowProducts4').remove()
    $('.buttonSeeLess').css('display','none')
    $('.buttonMoreProductions').css('display','block')
})




