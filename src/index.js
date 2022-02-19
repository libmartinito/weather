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
  

  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}, ${countryCode}&limit=1&appid=${API_KEY}`, {mode: 'cors'})
  const geolocationInfo = await response.json()

  const latitude = geolocationInfo[0].lat
  const longitude = geolocationInfo[0].lon

  return [latitude, longitude]
}

const getWeatherInfo = async () => {
  const coordinates = await getLocationCoordinates()

  const latitude = coordinates[0]
  const longitude = coordinates[1]

  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, {mode: 'cors'})
  const weatherInfo = await response.json()
  
  console.log(weatherInfo)
}

const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
  getWeatherInfo()
})

populateCountrySelection()
