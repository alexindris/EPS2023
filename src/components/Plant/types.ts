export type PlantProps = {
  plantName: string;
  plantId: string;
  props: {
    light: string;
    temperature: string;
    soilHumidity: string;
    airHumidity?: string;
  };
};
