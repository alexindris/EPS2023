# My Little Garden

My Little Garden is a three-person IoT plant-monitoring prototype built during
an approximately 22-hour HackEPS 2023 challenge. The prototype connected plant
sensors to an MQTT ingestion path, stored readings with Prisma and PostgreSQL,
and showed plant status and history in a Next.js application.

This repository is a historical hackathon prototype, not a production service.
The current tree contains only local-development placeholders; real Wi-Fi,
MQTT, database, and authentication credentials must stay in ignored local
configuration.

## Historical prototype architecture

The MQTT subscriber is retained as unexposed reference code; it is not started
by the current application.

```text
ESP8266 sensors
      |
      | MQTT
      v
MQTT subscriber and Next.js API routes
      |
      v
Prisma / PostgreSQL --> plant status and history views
```

The `data/` notebooks capture anomaly-detection and regression experiments.
They should not be read as evidence of a completed production forecasting
system.

## Àlex's contributions

This was a team project. Public repository history and Àlex Tello Vidal's
project record support his contributions to:

- MQTT ingestion and persistence for plant readings;
- Prisma/PostgreSQL data models, migrations, and plant-history APIs;
- configurable plant thresholds;
- anomaly-detection and regression experiments in Python notebooks.

The rest of the repository contains work from all three hackathon teammates;
the project should not be presented as the work of one person.

## Run locally

Prerequisites:

- Node.js 20 (Node.js 18.17 or newer is also supported);
- Corepack and pnpm 8.7.1;
- Docker with Docker Compose.

Create local configuration:

```bash
cp .env.example .env
```

Generate a local NextAuth secret with `openssl rand -base64 32` and place it in
`.env`. Then install dependencies and start the local database:

```bash
corepack pnpm install --frozen-lockfile
docker compose up -d --wait postgres
corepack pnpm generate
corepack pnpm migrate
corepack pnpm dev
```

The database port binds to `127.0.0.1` by default. The values in
`.env.example` are local-only examples and must not be reused outside local
development.

## Arduino configuration

Copy the ignored device configuration before compiling the Arduino sketch:

```bash
cp arduino/config.example.h arduino/config.h
```

This historical sketch uses plaintext MQTT. Run it only on an isolated local
test network with throwaway credentials; do not connect it to a public or other
non-local broker. Never commit `arduino/config.h`. A real deployment must use a
TLS client with certificate validation instead.

The sketch targets an ESP8266 NodeMCU-style board and uses the ESP8266 board
package plus PubSubClient, ArduinoJson, and the DHT sensor library. Install and
pin compatible versions locally before compiling. For example, with a prepared
Arduino CLI environment:

```bash
arduino-cli compile --fqbn esp8266:esp8266:nodemcuv2 arduino
```

The historical MQTT subscriber remains as reference code in `src/lib/mqtt.ts`,
but it is deliberately not exposed through a web route. A deployment should
run exactly one managed subscriber outside request handlers and use a
TLS-protected broker.

## Quality checks

```bash
corepack pnpm lint:strict
corepack pnpm format:check
corepack pnpm generate
corepack pnpm typecheck
corepack pnpm test -- --runInBand
corepack pnpm build
```

## Challenge source

The prototype responded to the plant-monitoring challenge published by
[Eurecat's Applied Artificial Intelligence team](https://github.com/Applied-Artificial-Intelligence-Eurecat/hackeps).

<details>
<summary>Original HackEPS challenge brief (Catalan)</summary>

<p align="right"><a href="https://github.com/Applied-Artificial-Intelligence-Eurecat/hackeps/blob/main/README.md">Català</a> | <a href="https://github.com/Applied-Artificial-Intelligence-Eurecat/hackeps/blob/main/README-es.md">Español</a> | <a href="https://github.com/Applied-Artificial-Intelligence-Eurecat/hackeps/blob/main/README-en.md">English</a></p>

---

<h1 align="center">

🔬 La IA ens deixarà sense treball i haurem de plantar tomàquets i criar gallines 🌱

</h1>

---

# El repte 👨‍🌾👩‍🌾

Aquest any, apostem per un problema molt més ampli que inclogui no només la part de data scientist de la unitat d'Applied Artificial Intelligence, sinó que també requereixi experimentar amb la programació, l'ús de dispositius _Internet of Things_, la gestió de dades i la seva visualització ✨

## Les missions 🍅

Per a familiaritzar-nos amb les plantes per a quan hàgim d'anar a plantar tomàquets, hem fundat el Departament Vegetal d'AAI i definit un pla d'execució format per sis missions:

- 🌼 **Missió Margarida**
- 🌷 **Missió Tulipa**
- 🎋 **Missió Bambú**
- 🥦 **Missió Bròcoli**
- 🥑 **Missió Alvocat**
- 🍑 **Missió Préssec**

A excepció de la `🌼 MISSIÓ MARGARITA`, aquestes missions no són necessàriament seqüencials: podeu fer-les de manera paral·lela entre els companys, o anar saltant d'una a una altra en funció de la vostra inspiració... Fins i tot podeu **no fer algunes** i **inventar-vos-en** d'altres.

No dubteu en venir a l'ambaixada del Departament Vegetal d'AAI (conegut com les taules de la HackEPS, on es troben els representants d'Eurecat) per validar les vostres idees si teniu algun dubte sobre si encaixa dins de la idea general del repte.

La `🌼 MISSIÓ MARGARIDA` **ÉS OBLIGATÒRIA**.

![](https://media.tenor.com/aeV80XD4CSgAAAAd/guidlines-pirates-of-the-caribbean.gif)

No patiu! 🥴 Sabem que conteu només amb 24h… No valorem exclusivament el nombre de missions que completeu, sinó que aprengueu del repte i sigueu capaços de ser prou analítics per aportar una solució i un punt de vista als problemes que se us plantegen.

### 🌼 MISSIÓ MARGARIDA

Abans de poder començar cap tasca, cal obtenir dades.

A les nostres instal·lacions tenim les primeres plantes enviant les dades a un servidor d'Eurecat mitjançant el procol MQTT a temps real. En aquest servidor es troba un broker Mosquitto. Demaneu a la taula d’Eurecat que us donin un usuari i contrasenya per a poder fer la connexió i escoltar els missatges que transmet la planta al topic `hackeps/eurecat`

El Departament Vegetal necessita poder guardar les dades d'alguna forma per la posterior visualització i anàlisi.

Necessiteu ajuda? No sabeu per on començar? Us falten les credencials? Pregunteu per slack o visiteu-nos!

### 🌷 MISSIÓ TULIPA

Un cop disposeu d'un sistema per guardar les dades a temps real, sol·liciteu al Departament Vegetal d'AAI d'Eurecat el _Ultimate SensorPlanta Kit 2023_.

Aquest kit conté el material necessari per a poder connectar una nova planta a l'hort digital i enviar les dades de la planta al topic `/hackeps/{id assignat a l'equip}`

Envieu les dades disponibles de la nova planta al servidor i enregistreu-les juntament amb la resta de dades de l'hort.

### 🎋 MISSIÓ BAMBÚ

Per culpa d’algun becari >:(, les dades que vam enregistrar tenen alguns errors, ja que els sensors no funcionaven correctament. Identifiqueu _quines 2 variables_ tenen errors al nostre dataset! Segurament estan lligades. Hi ha dos tipus d'errors de lectura, un associat a un sensor, i un altre associat a dos. Per a no perdre tot aquest progrés, la unitat de nyaps va guardar aquestes dades en un dataset **data/train.csv**. Hi trobaràs pocs errors, així que no cal que implementis cap model d'aprenentatge automàtic. Però vigila! Potser que a la missió bròcoli 🥦 et vagi bé utilitzar aquestes dades corregides.

Per poder entregar aquesta missió, haureu de donar-nos el csv corregit amb les dades corregides, i així tindrem els nostres agrònoms contents per futurs congressos de monitorització de plantes. Deixeu-lo al vostre repositori `data/<team>-anomaly.csv`.

### 🥦 MISSIÓ BRÒCOLI

El departament vegetal som uns visionaris i volem saber quina serà la humitat del terra, humitat de l'aire i temperatura ambient de la nostra planta en els catorze dies següents de l'horitzó de temps del dataset. Això vol dir que heu de fer un forecast de com seran aquestes dades en 14 dies vista! Podeu utilitzar dades externes per ajudar, però sempre consdierant que no tindreu aquestes dades externes tampoc després del final del dataset. No tot són flors i violes.

Per poder entregar aquesta missió, haureu de donar-nos el csv amb humitat del terra, humitat de l'aire i temperature ambient amb el mateix format de dates que el dataset **data/train.csv**. Deixeu el csv al vostre repositori `data/<team>-forecast.csv`.

### 🥑 MISSIÓ ALVOCAT

L'obsessió per programar preocupa al Departament Vegetal, ja que les plantes es moriran de set si continua aquesta dinàmica! Com que agafar una regadora i regar-les regularment no sembla ser una opció, s'ha fet entrega d'una bomba d’aigua perquè pugueu automatitzar-ho.

Afegiu la bomba d'aigua al sistema i habiliteu algun mecanisme per a regar la planta.

### 🍑 MISSIÓ PRÉSSEC

Interactuar amb les dades és gairebé tan important com tenir-les. El departament de desenvolupament d'interfícies atractives, col·laboradors habituals del departament vegetal d'AAI, ha estat subcontractat per idear una manera de poder explotar aquestes dades, però estan més secs d'idees que una noguera al gener.

Ideeu, dissenyeu i desenvolupeu eines relacionades amb la cura de l'hort digital, que idealment facin ús de les dades recollides en qualsevol de les altres missions.

## Com començar?

### Recursos 📦

The original event-specific broker details have been removed. Use an ignored
local `.env` file and `arduino/config.h` for any current MQTT configuration.

Una vegada avançada la missió margarida, podreu sol·licitar el _Ultimate SensorPlanta Kit 2023_ a la nostra taula, el qual constarà de:
| **ESP3288** | **Cable MicroUSB** | **Planta** |
|:----------------: |:---------------------------: |:-----------------------------: |
| **Díodes** | **Protoboard** | **Bomba d'aigua** |
| **Resistències** | **Convertidor de Voltatge** | **Diversos sensors i cables** |

### Recomanacions

Us recomanem que feu servir el llenguatge de programació amb el que estigueu més còmodes. Per programar el microcontrolador, podreu fer servir C, C++, Micro-Python, Lua o JavaScript. Per la visualització de dades, podeu fer servir python, juntament amb la utilització de [notebooks](https://jupyter.org/).

Aquestes són algunes biblioteques (**LIBRARY != LLIBRERIA**) i eines que podríeu utilitzar per a dur a terme les tasques que es presenten en les missions:

Per la connexió al broker MQTT:

- [MQTTX](https://mqttx.app/)
- [Eclipse PAHO (biblioteca MQTT per a molts llenguatges populars)](https://eclipse.dev/paho/)

Pel desenvolupament del Microcontrolador:

- [Arduino IDE](https://www.arduino.cc/en/software)
- [ESP8266 Datasheet (Summary)](https://github.com/Applied-Artificial-Intelligence-Eurecat/hackeps/blob/main/documentation/NodeMCU%20Documentation.pdf)
- [ESP8266 Technical Reference](https://www.espressif.com/sites/default/files/documentation/esp8266-technical_reference_en.pdf)

Per a tractar dades

- [pandas](https://pandas.pydata.org/)
- [numpy](https://numpy.org/)
- [statsmodels](https://www.statsmodels.org/)
- [matplotlib](https://pypi.org/project/matplotlib/)

AI:

- [scikit-learn](https://scikit-learn.org/stable/index.html)
- [xgboost](https://xgboost.readthedocs.io/en/stable/)
- [pytorch](https://pytorch.org/)

## La puntuació 👀

Tindrem en compte l'originalitat de les solucions i de la presentació, el percentatge de missions complertes,
l'eficàcia, l'eficiència, l'excel·lència i l'èxit en les solucions, el treball en equip, la comunicació i volem saber per què heu de ser l'equip guanyador.

### El premi 🏆

- 800€ pel 1r Premi
- 200€ pel 2n Premi

Molta sort!

</details>
