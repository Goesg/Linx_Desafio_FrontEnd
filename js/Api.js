// Classe para retornar os dados da api
class Consumer{
    static getJson(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(resposta => resposta.json())
            .then(data => {
                if(data) resolve({result:data});
                else{reject("Falha ao obter dados da Api")};
            });
        });
    };
};

// Classe para retornar arrays dos produtos 
class Conversor{
    static async JsonToArray(json){
        try{           
            let {result:{products}} = await json;
            let [item0,item1,item2,item3,item4,item5,item6,item7] = await products;
            let products1 = await [item0,item1,item2,item3];
            let products2 = await [item4,item5,item6,item7];
            return {products1:products1, products2:products2};
        }catch(err){console.log(err)};
    };

    static async JsonToArrayEmail(json){
        try{           
            let {result:{products}} = await json;
            let [item0,item1] = await products;
            let products1 = await [item0,item1];
            return {products1:products1};
        }catch(err){console.log(err)};
    };
};

// Classe para inserir os produtos no html
class Inserter{
    // o metodo inserte recebe o local onde será inserido os produtos e a lista de produtos
    static async inserIntoHtml(into,dataProducts){
        dataProducts.forEach((item)=> {
            $(into).append(`<div class="product"> 
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
            );
        });
    };
};

// a classe Product é a união as classes Consumer e Conversor
// recebendo a url da api e retornando no final a lista de produtos
class Product {
    static async getProducts(url){
        try{
            let resultJson = await Consumer.getJson(url);
            if(resultJson == "Falha ao obter dados da Api") return {erro:"Falha ao obter dados da Api"};
            let resultArray = await Conversor.JsonToArray(resultJson);
            return resultArray
        }catch(err){console.log(err)};
    };

    static async getProductsToEmail(url){
        try{
            let resultJson = await Consumer.getJson(url);
            if(resultJson == "Falha ao obter dados da Api") return {erro:"Falha ao obter dados da Api"};
            let resultArray = await Conversor.JsonToArrayEmail(resultJson);
            return resultArray
        }catch(err){console.log(err)}
    };
};

export { Product , Inserter}