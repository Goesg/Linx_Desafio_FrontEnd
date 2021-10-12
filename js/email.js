import { Product , Inserter } from "./Api.js";

const main = async ()=>{
    try{
        let productsApi = await Product.getProductsToEmail("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
        let {products1} = await productsApi
        await Inserter.inserIntoHtml('.products',products1)
    }catch(err){console.log(err)}
}
main()