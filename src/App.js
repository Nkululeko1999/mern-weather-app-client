import { useEffect, useState } from "react";
import Description from "./components/Description";
import Details from "./components/Details";
import Search from "./components/Search";
import axios from "axios";
import { getDayAndTime } from "./controllers/Time.js";
import { Loader } from "./controllers/Loader.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() { 
  const [currentData, setCurrentData] = useState({});
  const [currentCity, setCurrentCity] = useState("");
  const [serverData, setServerData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    cityName: ""
  });
  const [queriedData, setQueriedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        //request to get IP Address of the user and current location details
        const apiKeyResponse = await axios.get('/api-keys');
        const response = await axios.get('https://api.ipgeolocation.io/ipgeo?apiKey='+apiKeyResponse.data);
  
        if (response.status === 200) {
          const data = response.data;
          setCurrentData(data);
          setCurrentCity(data.city);
        
          //Send data to my server to use it to make another request to open weather api
          const postResponse = await axios.post('/city-weather', data);
          console.log('Response from server:', postResponse.data);
          setServerData(postResponse.data);
        } else {
          throw new Error('GET request was not successful');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  

  console.log(currentData);
  console.log(currentCity);
  console.log(formData);
  console.log(queriedData);

  return (
    isLoading? (<Loader />) : (
      <div className="container">
      <div className="left-container left-side-div">
        <Search 
          setFormData={setFormData}
          formData={formData}
          setQueriedData={setQueriedData}
          queriedData={queriedData}
        />
        <Description 
          setIsLoading={setIsLoading}
          serverData={serverData}
          queriedData={queriedData}
          currentCity={currentCity}
          getDayAndTime={getDayAndTime} 
        />
        <ToastContainer />
      </div>
      <div className="right-container right-side-div">
        <Details 
          serverData={serverData}
          queriedData={queriedData}
        />
      </div>
    </div>
    )
  )
    };
    
export default App;
