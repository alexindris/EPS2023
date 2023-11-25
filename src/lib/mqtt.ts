import mqtt from 'mqtt';
import { addIncomingPlanData } from '@/repositories/plants';
import {
  MQTT_HOST,
  MQTT_PASSWORD,
  MQTT_PORT,
  MQTT_TOPIC,
  MQTT_USERNAME,
} from './env';
import { logger } from './logger';

export const processData = () => {
  const client = mqtt.connect(MQTT_HOST, {
    port: parseInt(MQTT_PORT, 10),
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD,
  });
  client.subscribe(MQTT_TOPIC);

  client.on('message', async (topic, message) => {
    logger.debug(`MQTT message received on ${topic}: ${message.toString()}`);
    await addIncomingPlanData(JSON.parse(message.toString()));
  });
};
