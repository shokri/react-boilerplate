import { mdiServerNetworkOff } from '@mdi/js'
import Icon from '@mdi/react'
import {
  ElectricalServicesOutlined,
  ErrorOutline,
  LockPersonOutlined
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

export default error => {
  const { t } = useTranslation(['error'])

  const status = useMemo(
    () =>
      ({
        403: {
          icon: <LockPersonOutlined />,
          message: t('Access denied')
        },
        404: {
          icon: <ErrorOutline />,
          message: t('API not found')
        },
        500: {
          icon: <Icon path={mdiServerNetworkOff} size={1} />,
          message: t('Server error')
        },
        503: {
          icon: <ElectricalServicesOutlined />,
          message: t('Service unavailable')
        }
      }[error]),
    [error]
  )

  return {
    status
  }
}
