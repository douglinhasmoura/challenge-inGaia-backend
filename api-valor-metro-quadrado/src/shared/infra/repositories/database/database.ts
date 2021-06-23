export default class database  {
    
    private preco = { valor: 0 };
    constructor(){
        this.preco.valor = 2000;
    }

    
    public find(){
        return this.preco;
    }   
}