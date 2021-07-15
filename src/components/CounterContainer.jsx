import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';
import ControllerContainer from './ControllerContainer';
import LocalStorage from './LocalStorage';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      minValue: 0,
      maxValue: 10,
    };
  }

  componentDidMount() {
    const { maxValue, minValue, step } = this.state;
    localStorage.setItem('maxVal', maxValue);
    localStorage.setItem('minVal', minValue);
    localStorage.setItem('step', step);
  }

  render() {
    const { counter, step, maxValue, minValue } = this.state;
    return (
      <div>
        <ControllerContainer
          min={minValue}
          max={maxValue}
          clickEvent={() => {
            console.log(100);
          }}
        />
        <LocalStorage minVal={minValue} maxVal={maxValue} step={step} />
        <div className="flex items-center justify-center flex-row">
          <div className="mx-4 my-4">
            <ButtonCommon
              buttonName="Decrement"
              clickEvent={() => {
                if (counter > minValue + 1) {
                  this.setState({ counter: counter - step });
                } else {
                  this.setState({ counter: minValue });
                }
              }}
            />
          </div>
          <div className="mx-4 my-4 w-20 text-center">
            <span className="text-5xl text-green-500">{counter}</span>
          </div>
          <div className="mx-4 my-4">
            <ButtonCommon
              buttonName="Increment"
              clickEvent={() => {
                if (counter <= maxValue && counter >= minValue) {
                  this.setState({ counter: counter + step });
                } else {
                  this.setState({ counter: maxValue });
                }
              }}
            />
          </div>
        </div>
        <div className="flex align-center justify-center">
          <ButtonCommon
            buttonName="Reset"
            clickEvent={() => {
              this.setState({ counter: 0 });
            }}
          />
        </div>
      </div>
    );
  }
}
export default CounterContainer;
