import { useCallback, useEffect, useRef, useState } from 'react';
import data from '../../../data';
import { useSectionIndex } from '../../../framework/context/section';
import { useTheme } from '../../../framework/context/theme';
import { useTitle } from '../../../framework/context/title';
import Chart from '../../ui/Chart';
import ProgressBar from '../../ui/ProgressBar';
import s from './ResultsLoader.module.css';
const ResultsLoader = () => {
  const { dispatch: titleDispatch } = useTitle();
  const { dispatch: sectionIndexDispatch } = useSectionIndex();
  const { dispatch: themeDispatch } = useTheme();
  const content = data.data.pages
    ?.find((page: any) => page.slug === 'loader')
    ?.content.find((content: any) => content.type === 'text');

  useEffect(() => {
    const timer = setTimeout(() => {
      titleDispatch({ type: 'SET_TITLE', payload: '' });
      sectionIndexDispatch({ type: 'set', payload: -3 });
      themeDispatch({ type: 'UPDATE_THEME_COLOR', payload: 'white' });
    }, 3000);
    return () => clearTimeout(timer);
  }, [sectionIndexDispatch, themeDispatch, titleDispatch]);
  return (
    <div className={s.root}>
      <div className={s.chart}>
        <Chart />
      </div>
      <ProgressBar width={100} percent={Math.round(100)} />
      <p>{content?.content}</p>
    </div>
  );
};
export default ResultsLoader;
