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
  const open = isOpenDefault ? !isOpen : isOpen;
  return (
    <div className={s.accordionItem}>
      <h3 className={s.accordionItemTitle} onClick={handleClick}>
        {title}
      </h3>
      {open && <div className={s.accordionItemContent}>{children}</div>}
    </div>
  );
};
export default AccordionItem;
