import WeatherApp from "./components/WeatherApp"
import { WeatherProvider } from "./context/WeatherProvider"

function App() {

  return (
    <div>
      <WeatherProvider>
        <header>
          <h1>Weather App</h1>
        </header>
        <WeatherApp />
      </WeatherProvider>

    </div>
  )
}

export default App
