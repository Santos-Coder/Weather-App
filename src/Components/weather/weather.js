import React, {Component} from 'react';
import Form from "./form/form";
import WeatherData from "./weather-data/weather-data";

const API_KEY = 'e36ed364400282e43250b6c4c0274d44';
class WeatherGet extends Component {
    state = {
        city: '',
        country: '',
        icon: '',
        sky: '',
        tempreature: '',
        min: '',
        max: '',
        description: '',
        error: ''
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api.json();
            if(city) {
            this.setState({
            city: data.name,
            country: data.sys.country,
            icon: data.weather[0].icon,
            sky: data.weather[0].main,
            tempreature: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max,
            description: data.weather[0].description,
            error: '' 
            })
        } else {
            this.setState({
                city: '',
                country: '',
                icon: '',
                sky: '',
                tempreature: '',
                min: '',
                max: '',
                description: '',
                error: 'Please Enter Data'
            })
        }
    }
    render () {
      return (
        <div className="WeatherGet">
            <Form getWeather={this.getWeather}/>
            <WeatherData
            city={this.state.city}
            country={this.state.country}
            icon={this.state.icon}
            sky={this.state.main}
            tempreature={this.state.tempreature}
            min={this.state.min}
            max={this.state.max}
            discriptopn={this.state.description}
            error={this.state.error}
            />
        </div>
      );
    }
}
export default WeatherGet;