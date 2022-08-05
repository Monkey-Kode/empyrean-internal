import data from '../../../data';
import { useFormState } from '../../../framework/context/form';
import getFormValueFromSection from '../../../framework/state/gerFromValueFromSection';
import getSectionState from '../../../framework/state/getSectionState';
import getFieldLabelFromContentByName from '../../../lib/getFieldLabelFromContentByName';
import Accordion from '../../ui/Accordion';
import Button from '../../ui/Button';
import Chart from '../../ui/Chart';
import s from './Report.module.css';
const Report = () => {
  const { state: formState } = useFormState();
  const content = data.data.pages.find(
    (page) => page.slug === 'report'
  )?.content;
  const title = content?.find(
    (content: any) => content.type === 'title'
  )?.content;
  const subText = content?.find(
    (content: any) => content.type === 'subtext'
  )?.content;
  const subtitle = content?.find(
    (content: any) => content.type === 'subtitle'
  )?.content;
  const summary = content?.find(
    (content: any) => content.type === 'summary'
  )?.content;

  const firmSectionIndex = -1;
  const firmGraphicsFormName = 'firmographics';
  const companySizeFieldName = 'company-size';

  const companySize = getFieldLabelFromContentByName({
    formName: firmGraphicsFormName,
    fieldName: companySizeFieldName,
    value: getFormValueFromSection({
      sectionState: getSectionState({
        formState,
        sectionIndexState: { index: firmSectionIndex },
      }),
      sectionIndexState: { index: firmSectionIndex },
      field: { name: companySizeFieldName },
    }),
  });

  const roleFieldName = 'role';
  const role = getFieldLabelFromContentByName({
    formName: firmGraphicsFormName,
    fieldName: roleFieldName,
    value: getFormValueFromSection({
      sectionState: getSectionState({
        formState,
        sectionIndexState: { index: firmSectionIndex },
      }),
      sectionIndexState: { index: firmSectionIndex },
      field: { name: roleFieldName },
    }),
  });

  const industryFieldName = 'industry';
  const industry = getFieldLabelFromContentByName({
    formName: firmGraphicsFormName,
    fieldName: industryFieldName,
    value: getFormValueFromSection({
      sectionState: getSectionState({
        formState,
        sectionIndexState: { index: firmSectionIndex },
      }),
      sectionIndexState: { index: firmSectionIndex },
      field: { name: industryFieldName },
    }),
  });

  console.log('formState', formState);
  return (
    <div className={s.root}>
      <div className={s.topArea}>
        <div>
          <h1 className={s.mainHeading}>{title}</h1>
          <small>{subText}</small>
          <ul className={s.list}>
            <li>{companySize}</li>
            <li>{role}</li>
            <li>{industry}</li>
          </ul>
          <h2>{subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: String(summary) }} />
        </div>
        <div className={s.download}>
          <Button>Download PDF</Button>
          <Chart />
        </div>
      </div>
      <section>
        <Accordion />
      </section>
    </div>
  );
};

export default Report;
