import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "6720005e36f182c86760ebe385db0d9c"; //Use your API_KEY : 6720005e36f182c86760ebe385db0d9c

//Divya API_KEY: 2e34e22e4fe24c1fbfdcba880786cc04
class App extends React.Component
{
  getWeather = async (e) =>
  {
    e.preventDefault();
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Vellore,india&appid=6720005e36f182c86760ebe385db0d9c&units=metric');
    const data = await api_call.json();
    console.log(data);
  }
  render()
  {
    return(
    <div> 
      <Titles />
      <Form getWeather={this.getWeather}/>
      <Weather /> 
    </div>
    );
  }
};
export default App;