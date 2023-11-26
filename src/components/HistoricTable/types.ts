export type HistoricTableProps = {
  name: string;
  value: 'airHumidity' | 'light' | 'soilHumidity' | 'temperature';
  data: {
    date: string;
    _avg: {
      airHumidity: number;
      light: number;
      soilHumidity: number;
      temperature: number;
    };
  }[];
};
