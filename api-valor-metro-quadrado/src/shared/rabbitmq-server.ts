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

  async checkQueue(queue: string): Promise<boolean> {
    if (this.channel) {
      const check = await this.channel.checkQueue(queue);
      if (check.messageCount > 0) {
        return true;
      }
    }

    return false;
  }

  async createQueue(queue: string) {
    if(this.channel){
      await this.channel.assertQueue(queue);
    }
  }

  async publishInQueue(queue: string, message: string): Promise<boolean> {

    // await this.channel.assertQueue(queue,{ durable: false});
    const result = this.channel?.sendToQueue(queue, Buffer.from(message));
    console.log(" [x] Sent %s", message);

    return result || false;
  }

  // async publishInExchange(
  //   exchange: string,
  //   routingKey: string,
  //   message: string
  // ): Promise<boolean> {
  //   return this.channel.publish(exchange, routingKey, Buffer.from(message));
  // }

  async consume(queue: string, callback: (message: Message) => void) {

    return this.channel?.consume(queue, (message) => {
      if(message){
        callback(message);
        this.channel?.ack(message);
      }
      console.log(" [x] Receive %s", message?.content);
    });



  }
}