import express, { NextFunction, Request, Response } from 'express';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import routes from './routes/routes';

import {config} from 'dotenv';

config();

const PORT = process.env.PORT;

const app = express();


app.use(express.json());
app.use(routes);

const swaggerDefinition = {
    info: {
       title: 'API-02', 
        version: '1.0.0', 
    },
  };
  

const options = {
    swaggerDefinition,
      apis: ['./src/modules/imovel/http/routes/*.ts'],
  };

const swaggerSpecification = swaggerJsdoc(options);


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecification));

app.listen(PORT, async () =>{
    console.log(`Server Started on port: ${PORT}`);

    // const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
    // await server.start();

    // server.publishInQueue('fila01', '');
});

export default app;