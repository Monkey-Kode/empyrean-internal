import { FC } from 'react';
import Button from '../Button';
import Chart from '../Chart';
import s from './Hero.module.css';
const Hero: FC = () => {
  return (
    <section className={s.wrap}>
      <div className={s.content}>
        <h2 className={s.h2}>Benefits Maturity Index</h2>
        <p>
          The pandemic has re-shaped work, highlighting the importance of total
          employee wellbeing while bringing benefits to the board room.
          NelsonHall recognize in the current environment, Benefits play an
          increased role in supporting wider corporate and HR objectives.
        </p>
        <Button type="link" href="/participate">
          BEGIN THE ASSESSMENT
        </Button>
      </div>
      <Chart />
    </section>
  );
};
export default Hero;
