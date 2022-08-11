import cn from 'classnames';
import data from '../../../data';
import { useEmailModal } from '../../../framework/context/emailModal/indext';
import Button from '../../ui/Button';
import s from './DownloadReportButton.module.css';
interface DownloadReportButtonProps {
  className?: string;
}
const DownloadReportButton = ({ className }: DownloadReportButtonProps) => {
  const { dispatch: isOpenModalDispatch } = useEmailModal();
  const downloadContent = data.data.pages.find(
    (page: any) => page.slug === 'download-personal-report'
  )?.content;

  return (
    <>
      <Button
        data-html2canvas-ignore="true"
        className={cn(s.button, className)}
        onClick={() => {
          isOpenModalDispatch({ type: 'TOGGLE_MODAL' });
        }}
      >
        {downloadContent?.find((content: any) => content.type === 'cta')
          ?.content || 'Download Report'}
      </Button>
    </>
  );
};
export default DownloadReportButton;
