// Verifica se e um email valido
class checkerEmail{
    static async checkerEmail(email){
        try{
            if(email == undefined || email == null || email == ""){
                return 'Obrigatório a informação de algum email'
            };
            let regExpEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z]+\.[a-zA-Z]+$/
            if(regExpEmail.test(email) == false){
                return `Insira um email válido`
            };
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }
}

// Verifica se e um cpf valido
class checkerCpf{
    static async checkerCpf(cpf){
        try{
            if(cpf == undefined || cpf == null || cpf == ""){
                return `Obrigatório a informação de algum cpf`
            };
            let regExpcpf = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/
            if(regExpcpf.test(cpf) == false){
                return `Insira um cpf válido`
            };
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }
}


export { checkerEmail , checkerCpf }