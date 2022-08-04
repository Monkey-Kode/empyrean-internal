const data = {
  title: 'EMPYREAN RESEARCH INSTITUTE',
  data: {
    pages: [
      {
        title: 'Impact',
        slug: 'home',
        content: [
          {
            type: 'hero',
            title: 'BENEFITS MATURITY INDEX',
            __html: `<p>The importance of the Benefits Administration function to HR operations and the wider enterprise has been over-simplified in the past. However, the pandemic and its aftermath have had an unparalleled level of impact on the workforce and the importance of building a positive workplace culture and experience, and hence the role of benefits leaders is becoming more strategic than ever.</p>
                <p>Empyrean sponsored Nelson Hall to conduct a research study, interviewing 100 HR & Benefits leaders on the key HR-related issues that need to be addressed as part of an organization’s corporate strategy over the next 1-2 years and the extent to which benefits operations is key to employee experience and retention. <a href="https://empyrean.com">Request a copy of the report.</a></p>
                <p>The results of that research were used to build a Benefits Maturity Assessment. Over the next few minutes, you’ll answer a series of questions that will indicate your performance relative to that of your peers. Based on your responses, we will suggest actions to help increase your impact and uplift the capability of your benefits function, including a spider chart to indicate your overall maturity as a benefits function.</p>`,
            content: '',
            cta: {
              text: 'Begin the Assessment',
              link: '/participate',
            },
            tags: [],
          },
          {
            type: 'section',
            title: 'About Nelson Hall',
            link: 'https://www.research.nelson-hall.com',
            __html: '',
            content: `The leading global analyst firm dedicated to helping organizations understand the 'art of the possible' in HR and business services.`,
            cta: {
              text: '',
              link: '',
            },
            tags: [
              'BENEFITS ADMISITRATION',
              'TECHNOLOGY',
              'THOUGHT LEADER',
              'ADVISORY',
            ],
          },
          {
            type: 'section',
            title: 'About Empyrean',
            link: 'https://goempyrean.com',
            __html: '',
            content: `Since 2006, Empyrean has provided employers of varying size, industry, and benefit plan complexity with the innovative technology and best in class service necessary to accelerate their benefits strategies and bring their benefit programs to life.Empyrean’s platform and services were designed to create connected employee benefit experiences that enrich lives, strengthen employer brands, and improve workplace cultures.`,
            cta: {
              text: '',
              link: '',
            },
            tags: [
              'BENEFITS ADMISITRATION',
              'TECHNOLOGY',
              'THOUGHT LEADER',
              'ADVISORY',
            ],
          },
        ],
      },
      {
        title: 'Participate',
        slug: 'participate',
        content: [
          {
            type: 'hero',
            title: 'Firmographics',
            __html: '',
            content:
              'So that we can tailor your results, please provide the following information. ',
            cta: {
              text: 'Begin Assessment',
              link: '',
            },
          },
          {
            type: 'policy',
            content: `By proceeding, you acknowledge that your answers will be recorded and will only be used anonymously, and in aggregate with other respondents for future research.`,
          },
        ],
      },
      {
        title: 'Contact',
        slug: 'contact',
        content: [
          {
            type: 'title',
            content: 'Your Report',
          },
        ],
      },
      {
        title: 'Loader',
        slug: 'loader',
        content: [
          {
            type: 'text',
            content: `Please stand by while we calculate your results. We’ll determine the
            maturity of your benefits operation and share insights to help you
            improve your impact.`,
          },
        ],
      },
      {
        title: 'Report',
        slug: 'report',
        content: [
          {
            type: 'title',
            content: 'Your Results',
          },
          {
            type: 'subtext',
            content: `YOUR COMPANY FIRMOGRAPHICS`,
          },
          {
            type: 'subtitle',
            content: `Thank you for participating!`,
          },
          {
            type: 'summary',
            content: `<p>In the featured spider graph, your organization’s benefits maturity is plotted upon each of the five core areas identified in the research study. If your organization is more mature in a particular area, your rating will be plotted towards the edge of the corresponding spike.</p>
            <p>Below, we have used the results of your assessment to suggest actions that will help you to increase your impact and uplift the capability of your benefits function.</p>
            <p>
              Your maturity was calculated using the data collected from the NelsonHall research study: “The Changing Role of Benefits Leaders survey.” This primary research, sponsored by Empyrean, surveyed 100 HR & Benefits leaders, and was published in early 2022. The resulting report explored the changing role of the benefits function, uncovering the insights, tools, products, partners, and education needed to best serve the HR function and the broader organization. The research also explored the evolving demands on benefits platforms to uncover how these technologies must evolve to support the changing role of benefits leaders. Request a copy of the report.
              Recommendations to enhance your benefits capability are suggested below, based upon the primary research and NelsonHall market knowledge.
            </p>`,
          },
        ],
      },
    ],

    forms: [
      {
        title: 'Firmographics',
        slug: 'firmographics',
        description:
          'So that we can tailor your results, please provide the following information. ',
        fields: [
          {
            type: 'select',
            label: 'Company Size',
            name: 'company-size',
            options: [
              {
                label: 'Select',
                value: '',
              },
              {
                label: '1-10 Employees',
                value: '1-10',
              },
              {
                label: '11-50 Employees',
                value: '11-50',
              },
              {
                label: '51-100 Employees',
                value: '51-100',
              },
            ],
          },
          {
            type: 'select',
            label: 'Role',
            name: 'role',
            options: [
              {
                label: 'Select',
                value: '',
              },
              {
                label: 'HR Generalist',
                value: 'hr-generalist',
              },
            ],
          },
          {
            type: 'select',
            label: 'Industry',
            name: 'industry',
            options: [
              {
                label: 'Select',
                value: '',
              },
              {
                label: 'Technology',
                value: 'technology',
              },
            ],
          },
        ],
      },
      {
        title: 'Assessment',
        slug: 'assessment',
        description: '',
        sections: [
          {
            title: 'Connecting benefits to company culture',
            description:
              'Benefits should no longer be regarded as corporate hygiene; they are a critical element in establishing and driving company culture. This section examines the extent to which your organization believes that building a more positive workplace culture is important and that benefits could make a greater contribution to employee attraction, retention, and experience.',
            weight: 1,
            questions: [
              {
                text: 'To what extent is building a more positive workplace culture a critical element within your HR strategy',
                name: 'culture',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent is building a more positive workplace culture a critical element with your benefits strategy',
                name: 'culture-benefits',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'How important is that your benefits and benefits operations make a greater contribution to employee attraction',
                name: 'attraction',
                low: 'Not at all important',
                high: 'Very important',
              },
              {
                text: 'How important is that your benefits and benefits operations make a greater contribution to employee retention',
                name: 'retention',
                low: 'Not at all important',
                high: 'Very important',
              },
              {
                text: 'How important is that your benefits and benefits operations make a greater contribution to employee experience',
                name: 'experience',
                low: 'Not at all important',
                high: 'Very important',
              },
            ],
          },
          {
            title: 'Getting involved in strategy development & decision-making',
            description:
              'If benefits have a role to play in delivering an enhanced workplace culture, then it is important that benefits leaders are involved in the HR strategy development impacting workplace culture. This section examines the extent to which benefits leaders are involved in appropriate strategic initiatives and decision-making.',
            weight: 1,
            questions: [
              {
                text: 'To what extent are you as benefits leader currently involved in delivering upon strategic initiatives',
                name: 'strategy',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent are you as benefits leader currently involved in HR strategy development',
                name: 'strategy-hr',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent are you as benefits leader currently involved in talent retention strategies',
                name: 'strategy-talent',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent are you as the benefits leader involved in benefits evaluation and selection',
                name: 'strategy-benefits',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent is your benefits and HR strategy aligned with organizational goals',
                name: 'strategy-aligned',
                low: 'Not at all',
                high: 'Very extensively',
              },
            ],
          },
          {
            title:
              'Addressing total wellbeing at the individual level (personalization at scale)',
            descripton:
              'It is important that your employees feel that they are treated as individuals rather than impersonally. This section examines the extent to which your benefits are personalized and measures current employee satisfaction with the benefits available.',
            weight: 1,
            questions: [
              {
                text: 'To what extent does your current benefits technology provide personalized recommendations to employees that drive them towards the most appropriate benefits packages for their individual situation',
                name: 'personalization',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'How satisfied are your employees with their benefits experience for physical health support',
                name: 'satisfaction-physical',
                low: 'Not at all satisfied',
                high: 'Very satisfied',
              },
              {
                text: 'How satisfied are your employees with their benefits experience for mental health support',
                name: 'satisfaction-mental',
                low: 'Not at all satisfied',
                high: 'Very satisfied',
              },
            ],
          },
          {
            title:
              'Offering a consumer-grade communications & shopping experience',
            description:
              'Even with an excellent range of benefits, it is important that the individual employee is directed to the most appropriate opportunities for them and that benefits are easy to consume. This section examines the extent to which you provide a consumer-grade experience to allow employees to obtain maximum value with ease of use.',
            weight: 3,
            questions: [
              {
                text: 'To what extent has your benefits operations achieved high levels of automation & workflows minimizing both the user "clicks"and the number of user interfaces and ensuring effective data flows from enrollment to claims',
                name: 'automation',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent does your current benefits technology alert employees to potential wellness opportunities such as telehealth, disease management, and mental health support',
                name: 'alerting',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'How effective is your overall benefits communication?',
                name: 'communication',
                low: 'Not at all effective',
                high: 'Very effective',
              },
              {
                text: 'To what extent are your employees adopting the right-fit benefits plan you expected',
                name: 'adoption',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'offerings',
                name: 'offerings',
                low: 'Not at all',
                high: 'Very extensively',
              },
            ],
          },
          {
            title:
              'Use of data and analytics to drive decision-making and engagement',
            description:
              'Finally, it is important to build on success and continually optimize and enhance the benefits programs available to your employees. This section examines the extent to which your organization uses analytics to enhance benefits program and plan provider performance.',
            weight: 3,
            questions: [
              {
                text: 'How often does your organization measure employee benefits satisfaction and engagement',
                name: 'satisfaction',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent are you as benefits leader involved in employee satisfaction surveys',
                name: 'satisfaction-involved',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent does your current benefits administration platform provide analytics to understand and optimize benefits program performance',
                name: 'analytics',
                low: 'Not at all',
                high: 'Very extensively',
              },
              {
                text: 'To what extent does your current benefits administration platform provide analytics to assess plan providers and plan quality',
                name: 'analytics-providers',
                low: 'Not at all',
                high: 'Very extensively',
              },
            ],
          },
        ],
      },
    ],
  },
};

export default data;
