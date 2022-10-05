import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {

    const [search, setSearch] = useState({
        city: '',
        country: ''
    })
    const [result, setResult] = useState({})
    const [loading, setLaoding] = useState(false)
    const [noResult, setNoResult] = useState(false)
    const searchData = e => {
        setSearch({
            ...search,
            city: (search.city.replace(/\s+/g, '%20')),
            [e.target.name]: e.target.value
        }
        )
    }
    const checkWeather = async data => {
        try {
            const { city, country } = data
            setLaoding(true)
            const appId = import.meta.env.VITE_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
            const { data: weather } = await axios(url)

            setResult(weather)

        } catch (error) {
            setNoResult('Data Not Available')
            setResult('')

        } finally {
            setLaoding(false)
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                search,
                searchData,
                checkWeather,
                result,
                loading,
                noResult
            }}>
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}
export default WeatherContext