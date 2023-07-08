import difference from 'lodash/difference'
import isUndefined from 'lodash/isUndefined'
import isArray from 'lodash/isArray'
import { useSelector } from 'react-redux'

export default class Authorization {
  static hasPermission = permissionKey => {
    const { user } = useSelector(state => state?.user) || {}
    const userPermissions = user?.permissions

    try {
      if (isUndefined(permissionKey)) return true

      if (userPermissions && isArray(permissionKey)) {
        const access = difference(permissionKey, [...userPermissions.map(p => p?.slug)])

        if (access.length === 0) return true

        return false
      }
    } catch (error) {
      console.error('Authorization module err:', error)
      window.localStorage.clear()
    }
  }
}
