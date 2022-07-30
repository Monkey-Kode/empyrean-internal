import s from './Chart.module.css';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['strenght', 'luck', 'dexterity', 'charisma', 'intelligence'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: '#707070',
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <div className={s.root}>
      <Radar data={data} />
    </div>
  );
};
export default Chart;
