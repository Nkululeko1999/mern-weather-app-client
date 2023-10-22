import{WiDegrees} from "react-icons/wi";

export default function Description({currentCity, serverData, queriedData, getDayAndTime, setIsLoading}) {
  // Use queriedData if available, otherwise fallback to serverData
  const temp = queriedData?.main?.temp || serverData?.main?.temp;
  const description =
  queriedData?.weather && queriedData.weather[0]
    ? queriedData.weather[0].description
    : serverData?.weather && serverData.weather[0]
    ? serverData.weather[0].description
    : "N/A";

const icon =
  queriedData?.weather && queriedData.weather[0]
    ? queriedData.weather[0].icon
    : serverData?.weather && serverData.weather[0]
    ? serverData.weather[0].icon
    : "N/A";

  const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  const dayAndTime = getDayAndTime();

  if (!temp || !description || !icon) {
    setIsLoading(true);
  }

  console.log(currentCity);

  return (
    <div>
        <img src={imgUrl} className="weather-icon" alt="icon" />
        <h1 className="temp">{Math.round(temp)}
        <WiDegrees/>
        C</h1>
        <p className="description">{description}</p>
        <hr />
        <p className="description">{dayAndTime}</p>
        <h2 className="city">{queriedData.name || currentCity}</h2>
    </div>
  )
}
