import data from '../../../data';
import { useFormState } from '../../../framework/context/form';
import getFormValueFromSection from '../../../framework/state/gerFromValueFromSection';
import getScores from '../../../framework/score/getScores';
import getSectionState from '../../../framework/state/getSectionState';
import getFieldLabelFromContentByName from '../../../lib/getFieldLabelFromContentByName';
import Accordion from '../../ui/Accordion';
import Chart from '../../ui/Chart';
import s from './Report.module.css';
import cn from 'classnames';
import DownloadReportButton from '../../common/DownloadReportButton';
interface ReportProps {
  className?: string;
}
const Report = ({ className }: ReportProps) => {
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
  const scores = getScores({
    formState,
  });

  return (
    <div className={cn(s.root, className)}>
      <div className={s.topArea}>
        <div className={s.topAreaLeft}>
          <h1 className={s.mainHeading}>{title}</h1>
          <h1 className={s.printHeading}>Benefits Maturity Assessment</h1>
          <small className={s.small}>{subText}</small>
          <ul className={s.list}>
            <li>{companySize}</li>
            <li>{role}</li>
            <li>{industry}</li>
          </ul>
          <h2 className={s.h2}>{subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: String(summary) }} />
        </div>
        <div className={s.chart}>
          <Chart data={scores} printEnabled={true} />
        </div>
      </div>
      <section>
        <Accordion />
      </section>
      <div className={s.download}>
        <DownloadReportButton />
      </div>
    </div>
  );
};

export default Report;
