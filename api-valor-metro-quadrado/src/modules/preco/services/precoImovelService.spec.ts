import PrecoImovelService from "./precoImovelService";

//unit test
describe('find', () =>{
    it('should be find price of the property', () =>{

        const precoImovelService = new PrecoImovelService();
        
        const data = precoImovelService.find()

        expect(data).toHaveProperty('valor');

    });
});

