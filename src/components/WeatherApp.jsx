
import Form from './Form'
import Result from './Result'
import useWeather from '../hooks/useWeather'
import Loading from './Loading'
const WeatherApp = () => {

    const { result, loading, noResult } = useWeather()
    return (
        <>
            <main className='dos-columnas'>
                <Form />
                {loading ? <Loading /> :
                    result?.main ? <Result /> :
                        noResult ? <p className='contenedor alert'>{noResult}</p> :
                            <p className='contenedor'>The weather will be show here</p>}
            </main>
        </>
    )
}

export default WeatherApp