fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`)
.then(resposta => resposta.json()) 
.then((dados)=>{
    let {products} = dados
    let [item0,item1] = products
    let products1 = [item0,item1]   
    console.log(products1)
    products1.forEach((item)=>{
        $(`.products`).append(`<div class="product"> 
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




