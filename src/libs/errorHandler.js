import snackbar from 'components/snackbar'
import StatusCodes from 'libs/StatusCodes'

export const ServerErrorHandling = err => {
  if (err?.response) {
    const status = StatusCodes(err.response?.status)

    status?.action && status.action()

    if (status?.message) snackbar.error(status.message)
  }

  throw err
}
