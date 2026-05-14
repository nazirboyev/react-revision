// const API_KEY = "d0ce3d24f8ac43671f3d2b542ee4408a"


// navigator.geolocation.getCurrentPosition((position))

function WaetherApp() {
    return (
        <>
            <div className="weather-container">
                    <div className="header">
                        <input className="input-weather" type="text" placeholder="Enter city name" />
                        <button className="btn-weather">Search</button>
                    </div>
                    <div className="body">
                        <h1 className="gradus">33C</h1>
                    </div>
            </div>
        </>
    )                   
}

export default WaetherApp;