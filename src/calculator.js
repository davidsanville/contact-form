
import React, { Component } from 'react';

//https://reactjs.org/docs/lifting-state-up.html
function BoilingVerdict(props) {
  if (props.celsius == 90066) {
    //for a given zip code, find closest school's zipcode
    //display tutors who are at that zipcode/school
    return <p>Display ucla Tutors</p>;
  }
  if (props.celsius == 90291) {
    return <p>Display venice Tutors</p>;
  }
  return <p>Enter a zip code</p>;
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Find a local tutor:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />

        <BoilingVerdict
          celsius={parseFloat(temperature)} />

      </fieldset>
    );
  }
}

export default Calculator;
