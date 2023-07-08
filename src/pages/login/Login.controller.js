import { useFormik } from 'formik'
import isUndefined from 'lodash/isUndefined'
import { loginApi } from 'pages/login/libs/login-api'
import { getUserData } from 'pages/login/store/action/login-action'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

export default () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const { t } = useTranslation(['login'])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .max(255)
        .email(t('Invalid email'))
        .required(t('Required field')),
      password: Yup.string().max(255).required(t('Required field'))
    }),

    onSubmit: async e => {
      try {
        const { data } = await loginApi(e)

        if (data) {
          dispatch(
            getUserData({
              ...data.data,
              ...data.data.user
            })
          )
        }
      } catch (err) {
        console.error(err)
      }
    }
  })

  const formikProps = useCallback((name, initialValue = '') => ({
    name: name,
    fullWidth: true,
    margin: 'normal',
    variant: 'standard',
    onBlur: formik.handleBlur,
    onChange: formik.handleChange,
    disabled: formik.isSubmitting,
    value: isUndefined(formik.values[name])
      ? initialValue
      : formik.values[name],
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] ? formik.errors[name] : ''
  }), [])

  const handleShowPassword = () => setShowPassword(prev => !prev)

  return {
    formik,
    formikProps,
    showPassword,
    handleShowPassword
  }
}
