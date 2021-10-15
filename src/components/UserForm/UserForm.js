import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import styling
import "./UserForm.css";

//using a class component
class UserForm extends Component {
  //use the constructor object
  constructor(props) {
    super(props);
    //set the initial state of the object using 'this.state = {} '
    this.state = {
      height: 0,
      weight: 0,
    };

    //bind to make the 'this' work in the callback functin
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //create the actual event handler for height
  handleHeightChange(event) {
    //pass in the event paramater to access the properties : target and value
    //use 'this.setState' to change the initial state to what the user input in the form
    this.setState({
      height: event.target.value,
    });
  }

  //create event handler for weight
  handleWeightChange(event) {
    this.setState({
      weight: event.target.value,
    });
  }

  //create event handler for the onclick button
  handleClick() {
    const bmi = this.state.weight / (this.state.height * this.state.height);
    alert("Your BMI is " + bmi.toFixed(2));
  }

  render() {
    return (
      <div>
        <main>
          <h1> BMI Calculator </h1>
          <tt>
            {" "}
            The body mass index (BMI) is a measure that uses your height and
            weight to work out if your weight is healthy. The BMI calculation
            divides an adult's weight in kilograms by their height in metres
            squared. For example, A BMI of 25 means 25kg/m2. If your BMI is:
            <ul>
              <br />
              <li>
                {" "}
                -below 18.5 – you're in the <b> underweight </b> range{" "}
              </li>
              <li>
                {" "}
                -between 18.5 and 24.9 – you're in the <b>healthy</b> weight
                range{" "}
              </li>
              <li>
                {" "}
                -between 25 and 29.9 – you're in the <b>
                  overweight
                </b> range{" "}
              </li>
              <li>
                {" "}
                -between 30 and 39.9 – you're in the <b>obese</b> range{" "}
              </li>
            </ul>
          </tt>
          <br />
          <cite>
            https://www.nhs.uk/common-health-questions/lifestyle/what-is-the-body-mass-index-bmi/
          </cite>
        </main>
        {/* inline styling of form */}
        <Form
          style={{
            margin: "0 auto",
            display: "block",
            padding: "20px 350px 0px 350px",
          }}
        >
          <FormGroup>
            <Label>Height in m</Label>
            <Input
              type="number"
              name="height"
              placeholder="Enter height in m"
              onChange={this.handleHeightChange}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Weight in kg</Label>
            <Input
              type="number"
              name="weight"
              placeholder="Enter weight in kg"
              onChange={this.handleWeightChange}
            />
          </FormGroup>
          <br />
          <Button color="danger" onClick={this.handleClick} value="calculate">
            {" "}
            Calculate BMI{" "}
          </Button>
        </Form>
      </div>
    );
  }
}

//export component
export default UserForm;
