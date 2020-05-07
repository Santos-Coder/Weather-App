import React from 'react';
import './form.css'

const Form = (props) => {
        return (
            <form onSubmit={props.getWeather}>
                <h3>Just Type The City Name</h3>
                <p>You Must Spelling Correctly</p>
                <input type="text" name='city' placeholder="Enter City" />
                <button>Find</button>
            </form>
        )
}

export default Form;