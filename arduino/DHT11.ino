#include "DHT.h"
#define DHTTYPE DHT11 
#define dht_dpin 0
DHT dht(dht_dpin, DHTTYPE);
void DHT11Setup()
{
 dht.begin(); 
}

int DHT11Temperature() { 
 float t = dht.readTemperature();
 delay(1000);
 return int(t);
}

int DHT11Humidity() {
 float h = dht.readHumidity();  
 delay(1000);
 return int(h);
}