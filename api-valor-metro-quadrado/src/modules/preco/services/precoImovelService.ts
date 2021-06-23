import AppError from '@shared/errors/AppError';
import database from '@shared/infra/repositories/database/database';

export default class PrecoImovelService  {
    public find(){
        
        const precoBD = new database();

        const preco = precoBD.find();

        return preco;
    
    }
}