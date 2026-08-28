#pragma once

// Historical reference only: the sketch uses plaintext MQTT. Copy this file
// to config.h only for an isolated local test network, and use throwaway
// credentials. Never connect it to a public or other non-local broker.
// config.h is ignored by Git and must never be committed.
constexpr char DEVICE_ID[] = "replace-with-device-id";
constexpr char WIFI_SSID[] = "replace-with-wifi-ssid";
constexpr char WIFI_PASSWORD[] = "replace-with-wifi-password";
constexpr char MQTT_HOST[] = "replace-with-mqtt-host";
constexpr int MQTT_PORT = 1883;
constexpr char MQTT_USERNAME[] = "replace-with-mqtt-username";
constexpr char MQTT_PASSWORD[] = "replace-with-mqtt-password";
constexpr char MQTT_TOPIC[] = "replace-with-mqtt-topic";
