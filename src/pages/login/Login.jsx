import { Stack, Typography } from '@mui/material'
import LoginController from './Login.controller'

export default function Login() {
  const { t } = useTranslation(['login'])
  const { formik, formikProps } = LoginController()

  return (
    <Stack
      noValidate
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h1" color="secondary">
        {t('Login')}
      </Typography>

      <TextField
        autoFocus
        type="email"
        {...formikProps('email')}
        placeholder={t('email')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          )
        }}
      />

      <TextField
        type="password"
        {...formikProps('password')}
        placeholder={t('Password')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          )
        }}
      />

      <LoadingButton
        variant="contained"
        type="submit"
        loading={formik.isSubmitting}
      >
        {t('Login')}
      </LoadingButton>
    </Stack>
  )
}