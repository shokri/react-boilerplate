export default status =>
  ({
    400: {
      message: 'درخواست اشتباه به سرور'
    },
    401: {
      message: 'لطفاً ابتدا وارد سامانه شوید',
      action: async () => {
        await window.localStorage.clear()
        await window.sessionStorage.clear()
        window.location.reload()
      }
    },
    403: {
      message: 'نیازمند دریافت مجوز'
    },
    422: {
      message: 'اطلاعات وارد شده صحیح نمی باشد.'
    }
  }[status])
