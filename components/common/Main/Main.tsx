import { FC } from 'react';
import data from '../../../data';
import LogoIcon from '../../icons/LogoIcon';
import LogoNelsoHall from '../../icons/LogoNelsoHall';
import Hero from '../../ui/Hero';
import Section from '../../ui/Section';
import s from './Main.module.css';
const Main: FC = () => {
  const sections = data?.data?.pages
    ?.find((page: any) => page.slug === 'home')
    ?.content?.filter((content: any) => content.type === 'section');
  return (
    <main className={s.root}>
      <Hero />
      {sections?.map(({ title, content, link, tags, __html }: any) => {
        let icon =
          title === 'About Nelson Hall'
            ? LogoNelsoHall
            : title === 'About Empyrean'
            ? LogoIcon
            : undefined;
        return (
          <Section
            key={title}
            title={title}
            content={content}
            link={link}
            logo={icon}
            tags={tags}
            __html={__html}
          />
        );
      })}
    </main>
  );
};

export default Main;
