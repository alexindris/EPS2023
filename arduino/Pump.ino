const int pumpPIN = 4; 
void pumpSetup() {
  pinMode(pumpPIN, OUTPUT);
}

void pumpOn() {
  digitalWrite(pumpPIN, HIGH);
}

void pumpOff() {
  digitalWrite(pumpPIN, LOW);
}