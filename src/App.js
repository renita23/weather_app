import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "6720005e36f182c86760ebe385db0d9c";


class App extends React.Component
{
  getWeather = async () =>
  {
    const api_call = await fetch();
  }
  render()
  {
    return(
    <div> 
      <Titles />
      <Form />
      <Weather /> 
    </div>
    );
  }
};
export default App;