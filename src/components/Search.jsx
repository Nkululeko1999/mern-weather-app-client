import axios from "axios";
import {FaSearch} from "react-icons/fa";
import { toast } from 'react-toastify';

export default function Search({formData,setFormData, queriedData, setQueriedData}) {

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const searchWeather = async (e) => {
    e.preventDefault();
    if(formData.cityName === ""){
      return toast.error("Input Field Cannot be Empty");
    }
    try {
      const response = await axios.post('/city-name-weather', formData);
      setQueriedData(response.data)
      setFormData({
        ...formData,
        cityName: ""
      });
    } catch (error) {
      toast.error(error.message);
    }
  } 

  return (
    <div className="city-name-input">
        <form onSubmit={searchWeather}>
            <input onChange={handleChange} type="text" name="cityName" 
            value={formData.cityName}
            placeholder="Search by city name..." />
            <button type="submit"><FaSearch /></button>
        </form>
    </div>
  )
}
