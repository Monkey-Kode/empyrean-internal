import { useState } from 'react';
import data from '../../../data';
import { useFormState } from '../../../framework/context/form';
import { calculateSectionScore } from '../../../framework/score/calculateScores';
import getFormValueFromSection from '../../../framework/state/gerFromValueFromSection';
import getSectionState from '../../../framework/state/getSectionState';
import getFieldLabelFromContentByName from '../../../lib/getFieldLabelFromContentByName';
import Modal from '../../common/Modal';
import Accordion from '../../ui/Accordion';
import Button from '../../ui/Button';
import Chart from '../../ui/Chart';
import s from './Report.module.css';
const Report = () => {
  const [openModal, setOpenModal] = useState(false);
  const { state: formState } = useFormState();
  const content = data.data.pages.find(
    (page: any) => page.slug === 'report'
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

  const downloadContent = data.data.pages.find(
    (page: any) => page.slug === 'download-personal-report'
  )?.content;

  const sectionContent = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  )?.sections;
  const scores = sectionContent.map((section: any, index: number) => {
    return calculateSectionScore({
      formState,
      index,
    });
  });
  console.log('formState', formState);
  return (
    <div className={s.root}>
      <div className={s.topArea}>
        <div>
          <h1 className={s.mainHeading}>{title}</h1>
          <small className={s.small}>{subText}</small>
          <ul className={s.list}>
            <li>{companySize}</li>
            <li>{role}</li>
            <li>{industry}</li>
          </ul>
          <h2>{subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: String(summary) }} />
        </div>
        <div className={s.download}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(!openModal);
            }}
          >
            {
              downloadContent?.find((content: any) => content.type === 'cta')
                ?.content
            }
          </Button>
          <Chart data={scores} />
        </div>
      </div>
      <section>
        <Accordion />
      </section>
      {openModal && <Modal open={openModal} setOpen={setOpenModal} />}
    </div>
  );
};

export default Report;
