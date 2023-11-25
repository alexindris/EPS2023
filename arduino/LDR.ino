const int ldrPIN = 5;
const int maxLight = 1024;  
const int minLight = 0;  
void LDRsetup() {
  pinMode(ldrPIN, OUTPUT);
}

int LDRLight() {
  digitalWrite(ldrPIN, HIGH);
  delay(500);
  int sensorValue = analogRead(A0); 
  float percentage = map(sensorValue, minLight, maxLight, 0, 100);
  delay(100);
  digitalWrite(ldrPIN, LOW);
  delay(500);
  return int(percentage);
}