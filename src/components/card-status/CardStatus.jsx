import { Card, LinearProgress, Stack, Typography } from '@mui/material'
import CardStatusController from './CardStatus.controller'
import styles from './CardStatus.module.scss'

export default function CardStatus({
  children,
  className,
  isFetching,
  elevation = 5,
  error
}) {
  const { status } = CardStatusController(error)

  return (
    <Card className={className} elevation={elevation}>
      {isFetching ? <LinearProgress color="secondary" />: null}
      {status ? (
        <Stack className={styles.root}>
          <Stack className={styles.root__icon}>
            {status?.icon}

            <Typography variant="h5" className={styles.root__message}>
              {status?.message}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        children
      )}
    </Card>
  )
}
