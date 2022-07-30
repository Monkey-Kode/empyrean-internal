import s from './Tag.module.css';
interface TagProps {
  tag: string;
}
const Tag = ({ tag }: TagProps) => {
  return <div className={s.root}>{tag}</div>;
};
export default Tag;
