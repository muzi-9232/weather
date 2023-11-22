const baseURL = 
"https://api.weatherapi.com/v1/current.json?key=f0b9ce2a600d4e368e8102125232111"

export const getWeatherDataForCity = async (city) => {
const response = await fetch(`${baseURL}&q=${city}&api=yes`)
return await response.json();
}

export const getWeatherDataForLocation = async(lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&api=yes`)
    return await response.json()
}