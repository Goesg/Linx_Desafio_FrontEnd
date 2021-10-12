import { Product , Inserter } from "./Api.js";

// a função useApi se utiliza das classes importadas para 
// fazer o consumo da api e renderizar as fileiras de produtos no html
const useApi = async ()=>{
    try{
        let productsApi = await Product.getProductsToEmail("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
        let {products1} = await productsApi
        await Inserter.inserIntoHtml('.products',products1)
    }catch(err){console.log(err)}
}
useApi()