import { useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import Card from './components/Card'
import Button from './components/Button'
import { useWeather } from './context/Weather'

function App() {

  const weather = useWeather();
  //console.log(weather);

  useEffect(()=>{
    //get current location here
    weather.fetchCurrentLocationData();
  },[])
  return (
    <>
    <h1>Weather</h1>
    <Input/>
    <Button onClick={weather.fetchData} value="Search"/>
    <Card/>
    </>
  )
}

export default App
