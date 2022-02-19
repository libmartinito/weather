import './styles.css'

const populateCountrySelection = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name", {mode: 'cors'})
  const rawCountryArr = await response.json()

  const countrySelection = document.querySelector('#search__selection')
  const unsortedCountryArr = []

  for (let i = 0; i < rawCountryArr.length; i += 1) {
    unsortedCountryArr.push(rawCountryArr[i].name.common)
  }
  
  const sortedCountryArr = unsortedCountryArr.sort()

  for (let i = 0; i < sortedCountryArr.length; i += 1) {
    const option = document.createElement('option')
    option.textContent = sortedCountryArr[i]
    countrySelection.appendChild(option)
  }
}

const getCountryCode = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2", {mode: 'cors'})
  const countryInfoArr = await response.json()

  const countrySelectionValue = document.querySelector('#search__selection').value
  let countryCode = ''

  for (let i = 0; i < countryInfoArr.length; i += 1) {
    if (countrySelectionValue === countryInfoArr[i].name.common) {
      countryCode = countryInfoArr[i].cca2
    }
  }
  return countryCode
}

const API_KEY = '1fc5e4a9ac0b4336295c10a6462503b1'

const getLocationCoordinates = async () => {
  const countryCode = await getCountryCode()
  const city = document.querySelector('#search__input').value
  

  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}, ${countryCode}&limit=1&appid=${API_KEY}`, {mode: 'cors'})
  const geolocationInfo = await response.json()

  const latitude = geolocationInfo[0].lat
  const longitude = geolocationInfo[0].lon

  return [latitude, longitude]
}

const getWeatherInfo = async () => {
  const coordinates = await getLocationCoordinates()

  const latitude = coordinates[0]
  const longitude = coordinates[1]

  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`, {mode: 'cors'})
  const weatherInfo = await response.json()
  
  return weatherInfo
}

const formatTime = (time) => {
  if (time < 10) {
    return `0${time}`
  } 
    return time
}

const getTime = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000
  const dateObject = new Date(milliseconds)
  const hours = formatTime(dateObject.getHours())
  const minutes = formatTime(dateObject.getMinutes())
  const time = `${hours}:${minutes}`
  return time
}

const updateDisplay = (object, period) => {
  const weatherObjectKeys = Object.keys(object)

  for( let i = 0; i < weatherObjectKeys.length; i += 1) {
    const childSelector = `.${period} :nth-child(${i + 2})`
    const child = document.querySelector(childSelector)
    child.textContent = object[weatherObjectKeys[i]]
  }
}

const toPascalCase = (string) => {
  const strArr = string.split('')
  const pascalCaseStrArr = []

  for (let i = 0; i < strArr.length; i += 1) {
    if (i === 0) {
      pascalCaseStrArr.push(strArr[i].toUpperCase())
    } else if (strArr[i - 1] === ' ') {
      pascalCaseStrArr.push(strArr[i].toUpperCase())
    } else {
      pascalCaseStrArr.push(strArr[i])
    }
  }

  const pascalCaseStr = pascalCaseStrArr.join('')

  return pascalCaseStr
}

const updateWeatherToday = (weatherInfo) => {
  const weatherToday = {}

  weatherToday.temp = `${weatherInfo.current.temp}°C`
  weatherToday.feelsLike = `Feels like ${weatherInfo.current.feels_like}°C`
  const weatherDescriptionToday = toPascalCase(weatherInfo.current.weather[0].description)
  weatherToday.description = weatherDescriptionToday
  weatherToday.sunrise = `Sunrise: ${getTime(weatherInfo.current.sunrise)}`
  weatherToday.sunset = `Sunset: ${getTime(weatherInfo.current.sunset)}`
  weatherToday.dt = `Time: ${getTime(weatherInfo.current.dt)}`

  updateDisplay(weatherToday, 'today')
}

const updateWeatherTomorrow = (weatherInfo) => {
  const weatherTomorrow = {}

  weatherTomorrow.temp = `${weatherInfo.daily[1].temp.morn}°C`
  weatherTomorrow.feelsLike = `Feels like ${weatherInfo.daily[1].feels_like.morn}°C`
  const weatherDescriptionTomorrow = toPascalCase(weatherInfo.daily[1].weather[0].description)
  weatherTomorrow.description = weatherDescriptionTomorrow
  weatherTomorrow.sunrise = `Sunrise: ${getTime(weatherInfo.daily[1].sunrise)}`
  weatherTomorrow.sunset = `Sunset: ${getTime(weatherInfo.daily[1].sunset)}`

  updateDisplay(weatherTomorrow, 'tomorrow')
}

let tempTomorrowArr = []

const getTempTomorrow = async (weatherInfo) => {

  const timeOfDay = ['morn', 'day', 'eve', 'night']

  const tempTomorrow = {}
  const feelsLikeTomorrow = {}

  timeOfDay.forEach(time => {
    tempTomorrow[time] = weatherInfo.daily[1].temp[time]
    feelsLikeTomorrow[time] = weatherInfo.daily[1].feels_like[time]
  })

  tempTomorrowArr = [tempTomorrow, feelsLikeTomorrow]
}

const updateWeatherDisplay = async () => {
  const weatherInfo = await getWeatherInfo()

  updateWeatherToday(weatherInfo)
  updateWeatherTomorrow(weatherInfo)
  getTempTomorrow(weatherInfo)
}

const updateTomorrowTemp = () => {
  const searchInputValue = document.querySelector('#search__input').value
  const searchSelectionValue = document.querySelector('#search__selection').value

  const tempTomorrow = tempTomorrowArr[0]
  const feelsLikeTomorrow = tempTomorrowArr[1]
  const timeOfDayLegend = {
    'M': 'morn',
    'D': 'day',
    'E': 'eve',
    'N': 'night'
  }
  const cardSelectionValue = document.querySelector('.card__selection').value
  const cardSelectionValueArr = cardSelectionValue.split('')
  const timeOfDayLegendKey = cardSelectionValueArr[0]

  const temp = document.querySelector('.tomorrow :nth-child(2)')
  const feelsLike = document.querySelector('.tomorrow :nth-child(3)')

  const tempValue = tempTomorrow[timeOfDayLegend[timeOfDayLegendKey]]
  const feelsLikeValue = feelsLikeTomorrow[timeOfDayLegend[timeOfDayLegendKey]]
  
  if (searchInputValue !== '' && searchSelectionValue !== "--Select country--") {
    temp.textContent = `${tempValue}°C`
    feelsLike.textContent = `Feels like ${feelsLikeValue}°C`
  }
}

const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
  updateWeatherDisplay()
})

const selection = document.querySelector('.card__selection')

selection.addEventListener('change', () => {
  updateTomorrowTemp()
})

populateCountrySelection()
