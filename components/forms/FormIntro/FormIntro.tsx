import Lorem from '../../common/Lorem';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import s from './FormIntro.module.css';
const FormIntro = () => {
  return (
    <>
      <div className={s.root}>
        <Lorem />
        <h3 className={s.preTitle}>Firmographics</h3>
        <Select
          label="Company Size"
          options={[
            { value: '1-10', label: '1-10 Employees' },
            { value: '11-50', label: '11-50 Employees' },
            { value: '51-200', label: '51-200 Employees' },
            { value: '201-500', label: '201-500 Employees' },
            { value: '501-1000', label: '501-1000 Employees' },
            { value: '1001-5000', label: '1001-5000 Employees' },
            { value: '5001-10000', label: '5001-10000 Employees' },
            { value: '10001-50000', label: '10001-50000 Employees' },
            { value: '50001-100000', label: '50001-100000 Employees' },
            { value: '100001-500000', label: '100001-500000 Employees' },
            { value: '500001-1000000', label: '500001-1000000 Employees' },
          ]}
          name="company-size"
        />
        <Select
          label="Role"
          options={[
            {
              value: 'hr-generalist',
              label: 'HR Generalist',
            },
          ]}
          name="role"
        />
        <Select
          label="Industry"
          options={[
            {
              value: 'technology',
              label: 'Technology',
            },
          ]}
          name="industry"
        />
        <Button type="button">BEGIN THE ASSESSMENT</Button>
      </div>
    </>
  );
};
export default FormIntro;
