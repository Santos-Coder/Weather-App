import React, {Component} from 'react';
import './weather-data.css'

class WeatherData extends Component {
    render() {
        return (
            <div className='weather-data'>
                {this.props.city && <p>{this.props.city}, {this.props.country}</p>}
                {this.props.icon && <img src={`https://openweathermap.org/img/w/${this.props.icon}.png`} alt=""/>}
                {this.props.sky && <p>{this.props.sky}</p>}
                {this.props.tempreature && <p>{Math.floor(this.props.tempreature)}&#xb0;</p>}
                {this.props.max && <p><span>{Math.floor(this.props.min)}&#xb0;</span>
                <span>{Math.floor(this.props.max)}&#xb0;</span></p>}
                {this.props.description && <p>{this.props.description}</p>}
                {this.props.error && <p>error: {this.props.error}</p>}
            </div>
        )
    }
}

export default WeatherData;