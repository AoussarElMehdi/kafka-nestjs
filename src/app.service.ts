import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) { }

  produceMessage(message: string): string {
    try {
      this.producerService.produce({
        topic: 'test-topic',
        messages: [
          {
            value: message,
          }
        ]
      })
      return 'message produced';
    } catch (err) {
      return err.message;
    }
  }
}
