#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

const char *id = "6b98fe54-8bc3-11ee-b9d1-0242ac120002";
const char *ssid = "test";
const char *password = "12345678_";
const char *mqttServer = "84.88.76.18";
const int mqttPort = 1883;
const char *mqttUsername = "unidad_verdejante";
const char *mqttPassword = "Un!d4dV3rd3j@";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
LDRsetup();
DHT11Setup();
CSMSetup();
pumpSetup();
Serial.begin(9600);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Connect to MQTT broker
  client.setServer(mqttServer, mqttPort);
  client.setCallback(callback);

  while (!client.connected()) {
    Serial.println("Connecting to MQTT...");
    if (client.connect(id, mqttUsername, mqttPassword)) {
      Serial.println("Connected to MQTT");
    } else {
      Serial.print("Failed, rc=");
      Serial.print(client.state());
      Serial.println(" Retrying in 5 seconds...");
      delay(5000);
    }
  }
}

void callback(char *topic, byte *payload, unsigned int length) {
}

void loop() {
  StaticJsonDocument<200> obj;
  obj["id"] = id;
  obj["temperature"] = DHT11Temperature();
  obj["air_humidity"] = DHT11Humidity();
  obj["soil_humidity"] = CSMSHumidity();
  obj["light"] = LDRLight();

  String jsonString;
  char jsonBuffer[200];
  serializeJson(obj, jsonString);
  serializeJson(obj, jsonBuffer);
  Serial.println(jsonString);
  client.publish("hackeps/UV", jsonBuffer);
  delay(5000);
}