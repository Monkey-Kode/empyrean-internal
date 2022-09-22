import { useEffect } from 'react';
import data from '../../../data';
import generateRandomData from '../../../data/generateRandomData';
import { useSectionIndex } from '../../../framework/context/section';

import { useTitle } from '../../../framework/context/title';
import Chart from '../../ui/Chart';
import ProgressBar from '../../ui/ProgressBar';
import s from './ResultsLoader.module.css';
import cn from 'classnames';
import ChartLottie from '../../common/ChartLottie';
interface Props {
  className?: string;
}
const ResultsLoader = ({ className }: Props) => {
  const { dispatch: titleDispatch } = useTitle();
  const { dispatch: sectionIndexDispatch } = useSectionIndex();

  const content = data.data.pages
    ?.find((page: any) => page.slug === 'loader')
    ?.content.find((content: any) => content.type === 'text');

  useEffect(() => {
    const timer = setTimeout(() => {
      titleDispatch({ type: 'SET_TITLE', payload: '' });
      sectionIndexDispatch({ type: 'set', payload: -3 });
    }, 5000);
    return () => clearTimeout(timer);
  }, [sectionIndexDispatch, titleDispatch]);
  return (
    <div className={cn(s.root, className)}>
      <div className={s.chart}>
        <ChartLottie />
        {/* <Chart data={generateRandomData(5)} /> */}
      </div>
      <ProgressBar width={100} percent={Math.round(100)} />
      <p>{content?.content}</p>
    </div>
  );
};
export default ResultsLoader;
