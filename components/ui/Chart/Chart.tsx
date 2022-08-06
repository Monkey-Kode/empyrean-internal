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
/** Sample Response
 * section_0:
fields: Array(5)
0: {name: 'culture', value: '2', weight: 1}
1: {name: 'culture-benefits', value: '4', weight: 1}
2: {name: 'attraction', value: '5', weight: 1}
3: {name: 'retention', value: '3', weight: 1}
4: {name: 'experience', value: '4', weight: 1}
length: 5
weight: 1
2:
section_1:
fields: Array(5)
0: {name: 'strategy', value: '4', weight: 1}
1: {name: 'strategy-hr', value: '4', weight: 1}
2: {name: 'strategy-talent', value: '2', weight: 2}
3: {name: 'strategy-benefits', value: '4', weight: 2}
4: {name: 'strategy-aligned', value: '5', weight: 1}
length: 5
weight: 1
3:
section_2:
fields: Array(3)
0: {name: 'personalization', value: '2', weight: 2}
1: {name: 'satisfaction-physical', value: '1', weight: 1}
2: {name: 'satisfaction-mental', value: '4', weight: 2}
length: 3
weight: 1
4:
section_3:
fields: Array(5)
0: {name: 'automation', value: '4', weight: 1}
1: {name: 'alerting', value: '5', weight: 2}
2: {name: 'communication', value: '2', weight: 1}
3: {name: 'adoption', value: '3', weight: 1}
4: {name: 'offerings', value: '2', weight: 2}
length: 5
weight: 3
5:
section_4:
fields: Array(4)
0: {name: 'satisfaction', value: '1', weight: 2}
1: {name: 'satisfaction-involved', value: '2', weight: 1}
2: {name: 'analytics', value: '4', weight: 1}
3: {name: 'analytics-providers', value: '5', weight: 1}
length: 4
weight: 3
*/

export const defaultData = {
  labels: ['strenght', 'luck', 'dexterity', 'charisma', 'intelligence'],
  datasets: [
    {
      label: 'Score Distribution',
      data: [18, 25, 13, 69, 39],
      backgroundColor: 'rgba(193, 221, 230, 0.5)',
      borderColor: '#707070',
      borderWidth: 1,
    },
  ],
};
interface ChartProps {
  data: number[];
}
const Chart = ({ data }: ChartProps) => {
  const chartData = {
    ...defaultData,
    datasets: [
      {
        ...defaultData.datasets[0],
        data,
      },
    ],
  };

  return (
    <div className={s.root}>
      <Radar data={chartData} />
    </div>
  );
};
export default Chart;
