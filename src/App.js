import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "6720005e36f182c86760ebe385db0d9c"; //Use your API_KEY : 6720005e36f182c86760ebe385db0d9c

//Divya API_KEY: 2e34e22e4fe24c1fbfdcba880786cc04
class App extends React.Component
{
  state={
    temperature : undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) =>
  {
    e.preventDefault();
    
    const city=e.target.element.city.value;
    
    const country=e.target.element.country.value;
    
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric');
    
    const data = await api_call.json();
    
    console.log(data);
    
    this.setState({
      temperature: data.main.temp,
      city:data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    }); 
  }
  render()
  {
    return(
    <div> 
      <Titles />
      <Form getWeather={this.getWeather}/>
      <Weather 
        temperature = {this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error= {this.state.error}
      /> 
    </div>
    );
  }
}; 
export default App;