import request from 'supertest';

import app from '@shared/infra/http/server';

describe('Teste controller', () =>{
    it('should status 200', async () =>{
        
        const res = await request(app).get('/preco');
        expect(res.statusCode).toEqual(200);
        
    });
})