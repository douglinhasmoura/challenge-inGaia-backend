import Preco from "@modules/imovel/entities/preco";
import { Message, Replies } from "amqplib";
import RabbitmqServer from "rabbitmq-server";

export default class functions  {


    public between(value: number, min:number, max:number){
        return value >= min && value <= max;
    }
    
    public calcValue(price: number, meters: number){

        const total = price * meters;

        return total;
    }
    

}