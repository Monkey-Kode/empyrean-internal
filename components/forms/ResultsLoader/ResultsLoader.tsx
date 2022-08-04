import { useEffect } from 'react';
import data from '../../../data';
import { useSectionIndex } from '../../../framework/context/section';
import { useTitle } from '../../../framework/context/title';
import Chart from '../../ui/Chart';
import s from './ResultsLoader.module.css';
const ResultsLoader = () => {
  const { dispatch: titleDispatch } = useTitle();

  const { state: sectionIndexState, dispatch: sectionIndexDispatch } =
    useSectionIndex();
  const content = data.data.pages
    ?.find((page) => page.slug === 'loader')
    ?.content.find((content) => content.type === 'text');

  useEffect(() => {
    const timer = setTimeout(() => {
      titleDispatch({ type: 'SET_TITLE', payload: '' });
      sectionIndexDispatch({ type: 'set', payload: -3 });
      
    }, 3000);
    return () => clearTimeout(timer);
  }, [sectionIndexDispatch, titleDispatch]);
  return (
    <div className={s.root}>
      <div className={s.chart}>
        <Chart />
      </div>
      <p>{content?.content}</p>
    </div>
  );
};
export default ResultsLoader;
