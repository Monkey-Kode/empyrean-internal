import { FC, ReactNode, useState } from 'react';
import s from './AccordionItem.module.css';
const AccordionItem: FC<{
  title: string;
  children: ReactNode;
  isOpen?: boolean;
}> = ({ title, isOpen: isOpenDefault, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={s.accordionItem}>
      <div className={s.accordionItemTitle} onClick={handleClick}>
        {title}
      </div>
      {isOpenDefault ||
        (isOpen && <div className={s.accordionItemContent}>{children}</div>)}
    </div>
  );
};
export default AccordionItem;
