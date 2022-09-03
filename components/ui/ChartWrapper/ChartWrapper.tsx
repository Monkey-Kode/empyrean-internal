import { ChartData } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { ChartRadarOptions } from '../Chart/Chart';
interface Props {
  className?: string;
  options: ChartRadarOptions;
  chartData: ChartData<'radar', (number | null)[], unknown>;
}
const ChartWrapper = ({ options, chartData, className }: Props) => {
  return (
    <div className={className}>
      <Radar id="chart" options={options} data={chartData} />
    </div>
  );
};

export default ChartWrapper;
