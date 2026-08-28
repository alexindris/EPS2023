#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "config.h"

// Historical reference only: this sketch uses plaintext MQTT. Run it solely
// on an isolated local test network with throwaway credentials.
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  LDRsetup();
  DHT11Setup();
  CSMSetup();
  pumpSetup();
  Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Connect to MQTT broker
  client.setServer(MQTT_HOST, MQTT_PORT);
  client.setCallback(callback);

  while (!client.connected()) {
    Serial.println("Connecting to MQTT...");
    if (client.connect(DEVICE_ID, MQTT_USERNAME, MQTT_PASSWORD)) {
      Serial.println("Connected to MQTT");
    } else {
      Serial.print("Failed, rc=");
      Serial.print(client.state());
      Serial.println(" Retrying in 5 seconds...");
      delay(5000);
    }
  }
}

void callback(char *topic, byte *payload, unsigned int length) {}

void loop() {
  StaticJsonDocument<200> obj;
  obj["id"] = DEVICE_ID;
  obj["temperature"] = DHT11Temperature();
  obj["air_humidity"] = DHT11Humidity();
  obj["soil_humidity"] = CSMSHumidity();
  obj["light"] = LDRLight();

  String jsonString;
  char jsonBuffer[200];
  serializeJson(obj, jsonString);
  serializeJson(obj, jsonBuffer);
  Serial.println(jsonString);
  client.publish(MQTT_TOPIC, jsonBuffer);
  delay(5000);
}
