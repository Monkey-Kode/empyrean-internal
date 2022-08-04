import { FC } from 'react';
import data from '../../../data';
import { useTheme } from '../../../framework/context/theme';
import Button from '../Button';
import Chart from '../Chart';
import s from './Hero.module.css';

const Hero: FC = () => {
  const { dispatch: themeDispatch } = useTheme();

  const content = data.data.pages
    .find((page) => page.slug === 'home')
    ?.content.find((content) => content.type === 'hero');
  return (
    <section className={s.wrap}>
      <div className={s.content}>
        <h2 className={s.h2}>{content?.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content?.__html ?? '' }} />
        <Button
          className={s.button}
          type="link"
          href={content?.cta?.link ?? ''}
          onClick={() => {
            themeDispatch({ type: 'UPDATE_THEME_COLOR', payload: 'blue' });
          }}
        >
          {content?.cta?.text}
        </Button>
      </div>
      <Chart />
    </section>
  );
};

export default Hero;
