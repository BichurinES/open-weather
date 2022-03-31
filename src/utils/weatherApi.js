import { WEATHER_API_OPTIONS } from './constants'

class Api {
  constructor ({ baseUrl, headers, routes, params }) {
    this._baseUrl = baseUrl
    this._getWeatherUrl = `${baseUrl}${routes.getWeather}`
    this._initialParams = params.getWeather
    this._getWeatherParams = params.getWeather
    this._headers = headers
  }

  _createRequest ({
    url, headersObj, method, body
  }) {
    this._getWeatherParams = { ...this._initialParams }
    return fetch(url, { method, headers: { ...this._headers, ...headersObj }, body })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error(res.message))
      })
  }

  getWeather (query) {
    this._getWeatherParams = { ...this._getWeatherParams, ...query }
    const paramsString = Object.entries(this._getWeatherParams).map(([key, value]) => `${key}=${value}`).join('&')
    return this._createRequest({
      url: `${this._getWeatherUrl}?${paramsString}`,
      headersObj: this._headers,
      method: 'GET'
    })
  }
}

const api = new Api(WEATHER_API_OPTIONS)
export default api
