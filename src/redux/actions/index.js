import { JOBS_LOADED } from '../constants'
import { AppConfig } from 'api'
import HttpService from 'services/http.service'

export function getJobs() {
  return function (dispatch) {
    return HttpService.get(`${AppConfig.baseUrl}/job/active`).then((response) =>
      dispatch({ type: JOBS_LOADED, payload: response.data })
    )
  }
}
