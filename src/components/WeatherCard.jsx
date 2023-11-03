import { useState } from "react"
import './style/WeatherCard.css'


const WeatherCard = ({ weather, temp }) => {

    const [ isCelsius, setIsCelsius ] = useState(true)

    const handleChangeTemp = () => setIsCelsius(!isCelsius)

    return (
    <article className="weather">
        <h1 className="weather__tittle"> Weather Climate App</h1>
        <h2 className="weather__location">{weather?.name}, {weather?.sys?.country}</h2>
        <section className="weather__body">
            <header className=" weather__img__container">
            <img className="weather__img" src={weather?.weather[0].icon + ".gif"} alt="img" />
            </header>
            <article className="weather__info">
                <h3 className="weather__condition">"{weather?.weather[0].description}"</h3>
                <ul className="weather__list">
                    <li className="weather__item"><span className="weather__label"> Wind Speed :</span><span className="weather__value">{weather?.wind.speed} m/s </span></li>
                    <li className="weather__item"><span className="weather__label"> Clouds :</span><span className="weather__value">{weather?.clouds.all} % </span></li>
                    <li className="weather__item"><span className="weather__label"> Pressure :</span><span className="weather__value">{weather?.main.pressure} hPa </span></li>
                </ul>
            </article>
        </section>
        <h2 className="weather__temp">{isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}</h2>
        <button className="weather__btn" onClick={handleChangeTemp}> Change to {isCelsius ? '°F' : '°C'}</button>
    </article>
        
  )
}

export default WeatherCard