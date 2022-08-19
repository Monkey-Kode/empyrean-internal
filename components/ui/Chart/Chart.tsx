import s from './Chart.module.css';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import data from '../../../data';
import {
  isHighScore,
  isLowScore,
  isMediumScore,
} from '../../../framework/score/calculateScores';
ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
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
  labels: data.data.forms
    .find((page: any) => page.slug === 'assessment')
    .sections.map((section: any) => section.shortTitle),
  datasets: [
    {
      label: 'Score',
      data: [18, 25, 13, 69, 39],
      backgroundColor: 'rgba(221, 237, 84, .75)',
      borderColor: '#707070',
      borderWidth: 1,
    },
  ],
};
interface ChartProps {
  data: number[];
}

const Chart = ({ data }: ChartProps) => {
  let simpleData = data.map((value: number, index: number) => {
    console.log('value', value);
    if (isLowScore({ score: value, sectionIndex: index })) {
      return 1;
    } else if (isMediumScore({ score: value, sectionIndex: index })) {
      return 2;
    } else if (isHighScore({ score: value, sectionIndex: index })) {
      return 3;
    }
  });

  console.log('simpleData', simpleData);

  const chartData = {
    ...defaultData,
    datasets: [
      {
        ...defaultData.datasets[0],
        data: simpleData,
      },
    ],
  };

  return (
    <div className={s.root}>
      <Radar
        options={{
          responsive: true,
          scales: {
            title: {
              display: false,
            },
            r: {
              pointLabels: {
                display: true,
                // centerPointLabels: true,
                font: {
                  size: 14,
                },
              },
              min: 0,
              max: 4,
              ticks: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              titleFont: {
                size: 12,
              },
              callbacks: {
                label: function (context) {
                  const value = context.dataset.data[context.dataIndex];
                  const index = context.dataIndex;
                  if (
                    isLowScore({ score: Number(value), sectionIndex: index })
                  ) {
                    return 'Low';
                  } else if (
                    isMediumScore({ score: Number(value), sectionIndex: index })
                  ) {
                    return 'Medium';
                  } else if (
                    isHighScore({ score: Number(value), sectionIndex: index })
                  ) {
                    return 'High';
                  }
                  return '';
                },
              },
            },
          },
        }}
        data={chartData}
      />
    </div>
  );
};
export default Chart;
