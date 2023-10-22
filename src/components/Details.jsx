import {WiDegrees} from "react-icons/wi";

export default function Details({serverData, queriedData}) {

  // Use queriedData if available, otherwise fallback to serverData
  const feels_like = queriedData?.main?.feels_like || serverData?.main?.feels_like;
  const humidity = queriedData?.main?.humidity || serverData?.main?.humidity;
  const pressure = queriedData?.main?.pressure || serverData?.main?.pressure;
  const wind = queriedData?.wind?.speed || serverData?.wind?.speed;
  return (
    <div>
        <ul className="nav">
            <li className="list-item">Today</li>
            <span className="divider">|</span>
            <li className="list-item">Tomorrow</li>
        </ul>
        <div className="grid-details">
            <div className="detail-item">
                <p className="title">Wind</p>
                <h1 className="temp">{wind} m/s</h1>
            </div>
            <div className="detail-item">
                <p className="title">Humidity</p>
                <h1 className="temp">{humidity} %</h1>
            </div>
            <div className="detail-item">
                <p className="title">Feels Like</p>
                <h1 className="temp">{feels_like} <WiDegrees/>C</h1>
            </div>
            <div className="detail-item">
                <p className="title">Pressure</p>
                <h1 className="temp">{pressure} hPa</h1>
            </div>
        </div>
    </div>
  )
}
