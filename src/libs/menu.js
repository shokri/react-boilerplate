import Coin from 'assets/images/icons/Coin'
import Datepicker from 'assets/images/icons/Datepicker'
import Lamp from 'assets/images/icons/Lamp'
import Medal from 'assets/images/icons/Medal'
import Newspaper from 'assets/images/icons/Newspaper'
import Rocket from 'assets/images/icons/Rocket'

export const MENU_ITEMS = [
  {
    id: 'macro-manage',
    label: 'Macro management',
    icon: <Medal />,
    children: [
      {
        id: 'companies-status',
        path: '/companies-status',
        label: 'Companies status',
        permission: ['show_companies_status_page']
      },
      {
        id: 'financial-statements',
        path: '/financial-statements',
        label: 'Financial statements',
        permission: ['show_financial_statements_page']
      },
      {
        id: 'account-balance',
        path: '/account-balance',
        label: 'Account balance',
        permission: ['show_account_balance_page']
      },
      {
        id: 'codal',
        path: '/codal',
        label: 'Codal',
        permission: ['show_codal_page']
      }
    ]
  },
  {
    id: 'asset-management',
    path: '/asset-management',
    label: 'Asset management',
    icon: <Lamp />,
    permission: ['show_asset_management_page'],
    children: [
      {
        id: 'sales-analysis',
        path: '/asset-management/sales-analysis',
        label: 'Sales analysis',
        permission: ['show_sales_analysis_page']
      },
      {
        id: 'production',
        path: '/asset-management/production',
        label: 'Production',
        permission: ['show_stop_production_page']
      },
      {
        id: 'development-plans',
        path: '/asset-management/development-plans',
        label: 'Development plans',
        permission: ['show_development_plans_page']
      }
    ]
  },
  {
    id: 'capital-manage',
    path: '/capital-management',
    label: 'Capital management',
    icon: <Coin />,
    permission: ['show_capital_management_page']
  },
  {
    id: 'longterm-management',
    path: '/long-term-management',
    label: 'Long term management',
    icon: <Datepicker />,
    permission: ['show_long_term_management_page']
  },
  {
    id: 'profitability-management',
    path: '/profitability-management',
    label: 'Profitability management',
    icon: <Rocket />,
    permission: ['show_profitability_management_page']
  },
  {
    id: 'news',
    path: '/news',
    label: 'News',
    icon: <Newspaper />,
    permission: ['show_news_page']
  }
]
