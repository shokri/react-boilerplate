import { permission } from 'modules/general/libraries/permission'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Root() {
  const token = useSelector(state => state.user?.access_token),
    configured = useSelector(state => state.user?.configured_at)

  return <Redirect to={token && configured ? permission() : '/login'} />
}
