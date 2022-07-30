import s from './TagList.module.css';
interface TagListProps {
  tags: string[];
}
const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className={s.tags}>
      {tags.map((tag) => (
        <li key={tag} className={s.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
