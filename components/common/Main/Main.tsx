import { FC } from 'react';
import data from '../../../data';
import LogoIcon from '../../icons/LogoIcon';
import LogoNelsoHall from '../../icons/LogoNelsoHall';
import Hero from '../../ui/Hero';
import Section from '../../ui/Section';
import s from './Main.module.css';
import cn from 'classnames';
const Main: FC = () => {
  const sections = data?.data?.pages
    ?.find((page: any) => page.slug === 'home')
    ?.content?.filter((content: any) => content.type === 'section');
  return (
    <main className={s.root}>
      <Hero />
      {sections?.map(
        (
          {
            title,
            content,
            link,
            tags,
            __html,
          }: {
            title: string;
            content: string;
            link: string;
            tags: string[];
            __html: string;
          },
          index: any
        ) => {
          let icon =
            title === 'Nelson Hall'
              ? LogoNelsoHall
              : title === 'Empyrean'
              ? LogoIcon
              : undefined;
          return (
            <Section
              className={cn({
                [s.first]: index === 0,
              })}
              key={title}
              title={title}
              content={content}
              link={link}
              logo={icon}
              tags={tags}
              __html={__html}
            />
          );
        }
      )}
    </main>
  );
};

export default Main;
