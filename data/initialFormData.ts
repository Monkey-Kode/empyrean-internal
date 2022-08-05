import { State } from '../framework/context/form';

const intialFormData: State  = [
  {
    [`section_-1`]: {
      weight: 1,
      fields: [
        {
          name: 'company-size',
          value: '',
          weight: 0,
        },
        {
          name: 'role',
          value: '',
          weight: 0,
        },
        {
          name: 'industry',
          value: '',
          weight: 0,
        },
      ],
    },
  },
  {
    [`section_0`]: {
      weight: 1,
      fields: [
        {
          name: 'culture',
          value: '3',
          weight: 1,
        },
        {
          name: 'culture-benefits',
          value: '3',
          weight: 1,
        },
        {
          name: 'attraction',
          value: '3',
          weight: 1,
        },
        {
          name: 'retention',
          value: '3',
          weight: 1,
        },
        {
          name: 'experience',
          value: '3',
          weight: 1,
        },
      ],
    },
  },
  {
    [`section_1`]: {
      weight: 1,
      fields: [
        {
          name: 'strategy',
          value: '3',
          weight: 1,
        },
        {
          name: 'strategy-hr',
          value: '3',
          weight: 1,
        },
        {
          name: 'strategy-talent',
          value: '3',
          weight: 2,
        },
        {
          name: 'strategy-benefits',
          value: '3',
          weight: 2,
        },
        {
          name: 'strategy-aligned',
          value: '3',
          weight: 1,
        },
      ],
    },
  },
  {
    [`section_2`]: {
      weight: 1,
      fields: [
        {
          name: 'personalization',
          value: '3',
          weight: 2,
        },
        {
          name: 'satisfaction-physical',
          value: '3',
          weight: 1,
        },
        {
          name: 'satisfaction-mental',
          value: '3',
          weight: 2,
        },
      ],
    },
  },
  {
    [`section_3`]: {
      weight: 3,
      fields: [
        {
          name: 'automation',
          value: '3',
          weight: 1,
        },
        {
          name: 'alerting',
          value: '3',
          weight: 2,
        },
        {
          name: 'communication',
          value: '3',
          weight: 1,
        },
        {
          name: 'adoption',
          value: '3',
          weight: 1,
        },
        {
          name: 'offerings',
          value: '3',
          weight: 2,
        },
      ],
    },
  },
  {
    [`section_4`]: {
      weight: 3,
      fields: [
        {
          name: 'satisfaction',
          value: '3',
          weight: 2,
        },
        {
          name: 'satisfaction-involved',
          value: '3',
          weight: 1,
        },
        {
          name: 'analytics',
          value: '3',
          weight: 1,
        },
        {
          name: 'analytics-providers',
          value: '3',
          weight: 1,
        },
      ],
    },
  },
];

export default intialFormData;
