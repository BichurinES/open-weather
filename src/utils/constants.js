export const WEATHER_API_OPTIONS = {
  baseUrl: 'https://api.weatherapi.com/v1',
  routes: {
    getWeather: '/current.json'
  },
  params: {
    getWeather: {
      lang: 'en',
      key: process.env.VUE_APP_API_KEY
    }
  },
  headers: {
    authorization: '73878bf0-187e-4ea2-beea-67c91647b84f',
    'Content-Type': 'application/json'
  }
}

export const DEFAULT_CARD = {
  location: {
    name: 'Moscow',
    region: 'Moscow City',
    country: 'Russia',
    lat: 55.75,
    lon: 37.62,
    tz_id: 'Europe/Moscow',
    localtime_epoch: 1648698648,
    localtime: '2022-03-31 6:50'
  },
  current: {
    last_updated_epoch: 1648698300,
    last_updated: '2022-03-31 06:45',
    temp_c: -8.0,
    temp_f: 17.6,
    is_day: 1,
    condition: {
      text: 'Sunny',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      code: 1000
    },
    wind_mph: 0.0,
    wind_kph: 0.0,
    wind_degree: 153,
    wind_dir: 'SSE',
    pressure_mb: 1009.0,
    pressure_in: 29.8,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 73,
    cloud: 0,
    feelslike_c: -10.5,
    feelslike_f: 13.2,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 1.0,
    gust_mph: 5.8,
    gust_kph: 9.4
  }
}
