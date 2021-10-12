fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`)
.then(resposta => resposta.json()) 
.then((dados)=>{
    $('.containerProducts').prepend(`<div class="rowProducts" id="rowProducts1"></div>`)
    $('.containerProducts').append(`<div class="rowProducts" id="rowProducts2"></div>`)
    let {products} = dados
    let [item0,item1,item2,item3,item4,item5,item6,item7] = products
    let products1 = [item0,item1,item2,item3]   
    let products2 = [item4,item5,item6,item7]
    console.log(products1)
    products1.forEach((item)=>{
        $(`#rowProducts1`).append(`<div class="product"> 
            <img class="imgProduct" src="${item.image}">
            <div class="divInfoProduct">
            <h5 class="nameProduct">${item.name}</h5>
            <p class="description">${item.description}</p>
            <p class="oldPrice">De: R$${item.oldPrice}</p>
            <p class="price"> Por: R$${item.price}</p>
            <p class="installment"> ou ${item.installments.count}x de R$${item.installments.value}</p>
            <button>Comprar</button>
            </div> 
            </div>`
        )
               
    })

    products2.forEach((item)=>{
        $(`#rowProducts2`).append(`<div class="product"> 
            <img class="imgProduct" src="${item.image}">
            <div class="divInfoProduct">
            <h5 class="nameProduct">${item.name}</h5>
            <p class="description">${item.description}</p>
            <p class="oldPrice">De: R$${item.oldPrice}</p>
            <p class="price"> Por: R$${item.price}</p>
            <p class="installment"> ou ${item.installments.count}x de R$${item.installments.value}</p>
            <button>Comprar</button>
            </div> 
            </div>`
        )
               
    })
})   



$('.buttonMoreProductions').click(()=>{
    $('.buttonMoreProductions').css('display','none')
    $('.buttonSeeLess').css('display','block')
    fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2`)
    .then(resposta => resposta.json()) 
    .then((dados)=>{
    $('.containerProducts').append(`<div class="rowProducts" id="rowProducts3"></div>`)
    $('.containerProducts').append(`<div class="rowProducts" id="rowProducts4"></div>`)
    let {products} = dados
    let [item0,item1,item2,item3,item4,item5,item6,item7] = products
    let products1 = [item0,item1,item2,item3]   
    let products2 = [item4,item5,item6,item7]
    console.log(products1)
    products1.forEach((item)=>{
        $(`#rowProducts3`).append(`<div class="product"> 
            <img class="imgProduct" src="${item.image}">
            <div class="divInfoProduct">
            <h5 class="nameProduct">${item.name}</h5>
            <p class="description">${item.description}</p>
            <p class="oldPrice">De: R$${item.oldPrice}</p>
            <p class="price"> Por: R$${item.price}</p>
            <p class="installment"> ou ${item.installments.count}x de R$${item.installments.value}</p>
            <button>Comprar</button>
            </div> 
            </div>`
        )
               
    })

    products2.forEach((item)=>{
        $(`#rowProducts4`).append(`<div class="product"> 
            <img class="imgProduct" src="${item.image}">
            <div class="divInfoProduct">
            <h5 class="nameProduct">${item.name}</h5>
            <p class="description">${item.description}</p>
            <p class="oldPrice">De: R$${item.oldPrice}</p>
            <p class="price"> Por: R$${item.price}</p>
            <p class="installment"> ou ${item.installments.count}x de R$${item.installments.value}</p>
            <button>Comprar</button>
            </div> 
            </div>`
        )
               
    })
})   
})

$('.buttonSeeLess').click(()=>{
    $('#rowProducts3').remove()
    $('#rowProducts4').remove()
    $('.buttonSeeLess').css('display','none')
    $('.buttonMoreProductions').css('display','block')
})




