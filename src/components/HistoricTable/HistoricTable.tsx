/* eslint-disable no-underscore-dangle */
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import moment from 'moment';
import { HistoricTableProps } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const HistoricTable = ({ data, name, value }: HistoricTableProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: name,
      },
    },
  };

  const labels = data.map((p) => moment(p.date).format('dddd'));

  const dataTable = {
    labels,
    datasets: [
      {
        label: name,
        data: data.map((p) => p._avg[value]),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <div className='justify-center rounded-lg bg-pop px-4 pb-4 mb-10'>
      <Bar options={options} data={dataTable} />
    </div>
  );
};
