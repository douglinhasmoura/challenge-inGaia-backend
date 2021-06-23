import { Connection, Channel, connect, Message } from "amqplib";

export default class RabbitmqServer {
  private conn: Connection | undefined;
  private channel: Channel | undefined;

  constructor(private uri: string) { 
     
  }

  async start(): Promise<void> {
  
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
     
  }

  async publishInQueue(queue: string, message: string): Promise<boolean> {
    
    if(this.conn && this.channel){
      // await this.channel.assertQueue(queue,{ durable: false});
      const result = this.channel.sendToQueue(queue, Buffer.from(message));
      console.log(" [x] Sent %s", message);
  
      return result;
    }
     
    return false    
  }


  async consume(queue: string, callback: (message: Message) => void) {
    return await this.channel?.consume(queue, async (message) => {
      if(message){
        callback(message);
        this.channel?.ack(message);
        console.log(" [x] Receive %s", message?.content);
      }
    });
  }

}