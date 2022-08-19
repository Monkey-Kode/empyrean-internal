import { FC } from 'react';
import TagList from '../TagList';
import s from './Section.module.css';
import cn from 'classnames';
const Section: FC<{
  className?: string;
  title: string;
  content: string | undefined;
  link: string | undefined;
  tags?: string[];
  logo: (() => JSX.Element) | undefined;
  __html: string | undefined;
}> = ({ className, title, content, logo, link, tags, __html }) => (
  <section className={cn(s.section, s.root, className)}>
    <header className={s.sectionHeader}>
      <h2>{title}</h2>
      {logo && (
        <a href={link} className={s.logo} target="_blank" rel="noreferrer">
          {logo()}
        </a>
      )}
    </header>
    {/* {tags && <TagList tags={tags} />} */}
    {__html && (
      <div
        className={s.sectionContent}
        dangerouslySetInnerHTML={{
          __html,
        }}
      />
    )}
    {content}
  </section>
);
export default Section;
