export const validateNome = (nome) => {
    
    if(!nome){
        return 'nome e obrigatorio'
    }
    return ''
}
export const validateTelefone = (telefone) => {
    const telefoneRegex = /^\d{11}$/;
    if(!telefone){
        return 'numero de telefone e obrigatorio'
    }
    if(!telefoneRegex.test(telefone)){
        return 'insira um numero de telefone valido'
    }
    return ''
}