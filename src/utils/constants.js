export const OPEN_WEATHER_API_OPTIONS = {
  baseUrl: ' https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5',
  routes: {
    getWeather: '/weather'
  },
  params: {
    getWeather: {
      units: 'metric',
      lang: 'en',
      APPID: process.env.VUE_APP_API_KEY
    }
  },
  headers: {
    authorization: '73878bf0-187e-4ea2-beea-67c91647b84f',
    'Content-Type': 'application/json'
  }
}

export const DEFAULT_CARD = {
  coord: {
    lon: 56.0375,
    lat: 54.775
  },
  weather: [
    {
      id: 600,
      main: 'Snow',
      description: 'light snow',
      icon: '13d'
    }
  ],
  base: 'stations',
  main: {
    temp: 0.17,
    feels_like: -4.91,
    temp_min: 0.17,
    temp_max: 0.65,
    pressure: 1006,
    humidity: 100,
    sea_level: 1006,
    grnd_level: 984
  },
  visibility: 2530,
  wind: {
    speed: 5.37,
    deg: 180,
    gust: 11.29
  },
  snow: {
    '1h': 0.46
  },
  clouds: {
    all: 100
  },
  dt: 1648618306,
  sys: {
    type: 2,
    id: 146105,
    country: 'RU',
    sunrise: 1648605211,
    sunset: 1648651621
  },
  timezone: 18000,
  id: 479561,
  name: 'Moscow',
  cod: 200
}
