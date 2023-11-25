const int csmsPIN = 16;
const int AirValue = 580;  
const int WaterValue = 468;  
int csmsValue = 0;
int humidityPercentage = 0;

void CSMSetup() { 
  pinMode(csmsPIN , OUTPUT);
}

int CSMSHumidity() {
  digitalWrite(csmsPIN, HIGH); 
  delay(500);
  csmsValue = analogRead(A0);
  humidityPercentage = map(csmsValue, AirValue, WaterValue, 0, 100);
  
  if(humidityPercentage<40)
    pumpOn();
  delay(1000);
  digitalWrite(csmsPIN, LOW);
  pumpOff();
  delay(500);
  return humidityPercentage;
}
