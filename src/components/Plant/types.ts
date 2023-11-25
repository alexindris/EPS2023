export type PlantProps = {
  plantName: string;
  props: {
    light: string;
    temperature: string;
    soilHumidity: string;
    airHumidity?: string;
  };
};
