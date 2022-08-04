import { useState } from 'react';
import s from './AccordionItem.module.css';
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={s.accordionItem}>
      <div className={s.accordionItemTitle} onClick={handleClick}>
        {title}
      </div>
      {isOpen && <div className={s.accordionItemContent}>{children}</div>}
    </div>
  );
};
export default AccordionItem;
