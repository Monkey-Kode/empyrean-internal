import { FC, ReactNode, useState } from 'react';
import s from './AccordionItem.module.css';
import { useFormState } from '../../../framework/context/form';
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
      <h3 className={s.accordionItemTitle} onClick={handleClick}>
        {title}
      </h3>
      {!isOpen && <div className={s.accordionItemContent}>{children}</div>}
    </div>
  );
};
export default AccordionItem;
