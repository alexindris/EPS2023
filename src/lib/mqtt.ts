import mqtt from 'mqtt';
import { addIncomingPlanData } from '@/repositories/plants';
import { z } from 'zod';
import { logger } from './logger';

const mqttEnvSchema = z.object({
  MQTT_HOST: z.string().url(),
  MQTT_PORT: z.coerce.number().int().min(1).max(65535),
  MQTT_TOPIC: z.string().min(1),
  MQTT_USERNAME: z.string().optional(),
  MQTT_PASSWORD: z.string().optional(),
});

export const processData = () => {
  const mqttConfig = mqttEnvSchema.parse(process.env);
  const client = mqtt.connect(mqttConfig.MQTT_HOST, {
    port: mqttConfig.MQTT_PORT,
    username: mqttConfig.MQTT_USERNAME,
    password: mqttConfig.MQTT_PASSWORD,
  });
  client.subscribe(mqttConfig.MQTT_TOPIC);

  client.on('message', async (topic, message) => {
    logger.debug(`MQTT message received on ${topic}: ${message.toString()}`);
    await addIncomingPlanData(JSON.parse(message.toString()));
  });
};
