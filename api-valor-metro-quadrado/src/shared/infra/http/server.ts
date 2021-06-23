import express from 'express';
import routes from '@shared/infra/http/routes/routes';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import {config} from 'dotenv';

config();


const PORT = process.env.PORT || 3001;

const app = express();

const swaggerOptions ={
    swaggerDefinition:{
        info:{
            title: 'API-01',
            version: '1.0.0'
        }
    },
    apis:['./src/modules/preco/http/routes/*.ts']
}

app.use(express.json());
app.use(routes);


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(PORT, async () =>{
    console.log(`Server Started on port: ${PORT}`);
});

export default app;