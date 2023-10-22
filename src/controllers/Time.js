export const getDayAndTime = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
  
    const day = daysOfWeek[now.getDay()]; 
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    if (hours > 12) {
      hours -= 12;
    }
  
    // single-digit minutes are formatted with a leading zero (e.g., 05)
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  
    const time = `${hours}:${formattedMinutes} ${ampm}`; // Formatted time
  
    return `${day}, ${time}`;
  }
  

  