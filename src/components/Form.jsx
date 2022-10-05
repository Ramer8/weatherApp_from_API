import { useState } from 'react'
import useWeather from "../hooks/useWeather"

const Form = () => {

    const [alert, setAlert] = useState('')
    const { search, searchData, checkWeather } = useWeather()
    const { city, country } = search

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(search).includes('')) {
            setAlert("All the fields are required")
            return
        }
        setAlert('')
        checkWeather(search)
    }
    return (

        <div className='contenedor'>
            {alert && <p className='alert'>{alert}</p>}
            <form
                onSubmit={handleSubmit}>
                <div className='campo'>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id='city'
                        name='city'
                        onChange={searchData}
                        value={city.replace('%20', ' ')}
                        placeholder='Insert City'

                    />
                </div>
                <div className='campo'>
                    <label htmlFor="country">Country</label>
                    <select
                        name="country"
                        id="conutry"
                        onChange={searchData}
                        value={country}
                    >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="BR">Brazil</option>
                        <option value="CL">Chile</option>
                        <option value="PE">Perú</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">Spain</option>
                        <option value="IT">Italy</option>
                        <option value="UK">England</option>
                    </select>
                </div>
                <input type="submit"
                    value='Check Weather' />
            </form>
        </div>
    )
}

export default Form