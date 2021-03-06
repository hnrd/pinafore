import { getWithTimeout, paramsString } from '../_utils/ajax'
import { auth, basename } from './utils'

export async function getReblogs (instanceName, accessToken, statusId, limit = 80) {
  let url = `${basename(instanceName)}/api/v1/statuses/${statusId}/reblogged_by`
  url += '?' + paramsString({ limit })
  return getWithTimeout(url, auth(accessToken))
}

export async function getFavorites (instanceName, accessToken, statusId, limit = 80) {
  let url = `${basename(instanceName)}/api/v1/statuses/${statusId}/favourited_by`
  url += '?' + paramsString({ limit })
  return getWithTimeout(url, auth(accessToken))
}
