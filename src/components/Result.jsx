import useWeather from "../hooks/useWeather"

const Result = () => {

    const { result } = useWeather()
    const kelvin = 273.15
    const temp = Math.round((result.main.temp) - kelvin)
    return (
        <div className="contenedor clima">
            <h2> The weather in <span>{result.name} is:</span></h2>

            {temp >= 25 ? <p className="max">{temp} <span>&#x2103;</span> </p> :
                temp < 10 ? <p className="min">{temp} <span>&#x2103;</span> </p> :
                    <p>{temp} <span>&#x2103;</span> </p>}

            <div className="temp_min_max">
                <p>Max {Math.round((result.main.temp_max) - kelvin)}<span>&#x2103;</span></p>
                <p>Min {Math.round((result.main.temp_min) - kelvin)}<span>&#x2103;</span></p>

            </div>

        </div>
    )
}

export default Result