import { FC } from 'react';
import LogoIcon from '../../../icons/LogoIcon';
import LogoNelsoHall from '../../../icons/LogoNelsoHall';
import Hero from '../../../ui/Hero';
import TagList from '../../../ui/TagList';
import Lorem from '../../Lorem';
import s from './Main.module.css';
const Main: FC = () => {
  return (
    <main className={s.root}>
      <h1 className={s.h1}>Impact</h1>
      <Hero />
      <section className={s.section}>
        <h2>
          CONCEPTION <br></br>& CREATION
        </h2>
        <div className={s.sectionContent}>
          <p>
            <Lorem />
          </p>
          <p>
            <Lorem />
          </p>
        </div>
      </section>
      <section className={s.section}>
        <header className={s.sectionHeader}>
          <h2>Empyrean</h2>
          <LogoIcon />
        </header>
        <TagList
          tags={[
            'BENEFITS ADMISITRATION',
            'TECHNOLOGY',
            'THOUGHT LEADER',
            'ADVISORY',
          ]}
        />
        <div className={s.sectionContent}>
          <p>
            <Lorem />
          </p>
        </div>
      </section>
      <section className={s.section}>
        <header className={s.sectionHeader}>
          <h2>Nelson Hall</h2>
          <LogoNelsoHall />
        </header>
        <TagList
          tags={['HUMAN RESOURCES', 'RESEARCH', 'ANALYTICS', 'ADVISORY']}
        />
        <p className={s.p}>
          <Lorem />
        </p>
      </section>
    </main>
  );
};

export default Main;
