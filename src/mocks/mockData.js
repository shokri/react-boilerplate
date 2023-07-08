export const mockProductionLinesDetail = {
  data: [
    {
      production_amount: 0,
      production_plan: 1.05,
      activities: [
        {
          title: 'بهره‌وری عملیاتی',
          value: {
            seconds: 86400,
            hours: 24
          }
        },
        {
          title: 'بهره‌وری تقویمی',
          value: {
            seconds: 0,
            hours: 0
          }
        }
      ],
      efficiencies: [
        {
          title: 'بهره‌وری عملیاتی',
          value: {
            seconds: 129.6,
            hours: 0.036
          }
        },
        {
          title: 'بهره‌وری تقویمی',
          value: {
            seconds: 129.6,
            hours: 0.036
          }
        }
      ],
      stops: [],
      date: {
        gregorian: '2022-03-21',
        hijri: '1401-01-01'
      },
      status: {
        rank: 2,
        short_message: 'خیلی خوب'
      }
    },
    {
      production_amount: 1,
      production_plan: 1.7868000000000002,
      activities: [
        {
          title: 'بهره‌وری عملیاتی',
          value: {
            seconds: 86400,
            hours: 24
          }
        },
        {
          title: 'بهره‌وری تقویمی',
          value: {
            seconds: 0,
            hours: 0
          }
        }
      ],
      efficiencies: [
        {
          title: 'بهره‌وری عملیاتی',
          value: {
            seconds: 223.2,
            hours: 0.062
          }
        },
        {
          title: 'بهره‌وری تقویمی',
          value: {
            seconds: 223.2,
            hours: 0.062
          }
        }
      ],
      stops: [],
      date: {
        gregorian: '2022-03-22',
        hijri: '1401-01-02'
      },
      status: {
        rank: 3,
        short_message: 'غیر عادی خوب'
      }
    }
  ],
  meta: {
    stops: [
      {
        id: 577,
        train_id: '1',
        date: '2022-04-14',
        inactive_hours: 1.4,
        prod_problem_id: 0,
        title: 'نامشخص'
      },
      {
        id: 1442,
        train_id: '2',
        date: '2022-05-20',
        inactive_hours: 8.4,
        prod_problem_id: 75,
        title: 'كمپرسورها'
      }
    ]
  }
}

export const mockProductionAnomaly = {
  data: [
    {
      rank: 3,
      message: 'دیروز، توقف تولید به دلیل همزن به طور غیر عادی خوب بود.',
      short_message: 'به طور غیر عادی خوب'
    }
  ]
}
