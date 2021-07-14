import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';
import ControllerContainer from './ControllerContainer';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      minValue: 0,
      maxValue: 100,
    };
  }

  render() {
    const {
      counter, step, maxValue, minValue,
    } = this.state;
    return (
      <div>
        <ControllerContainer
          clickEvent={() => {
            console.log(100);
          }}
        />
        <div className="flex items-center justify-center flex-row">
          <div className="mx-4 my-4">
            <ButtonCommon
              buttonName="Decrement"
              clickEvent={() => {
                if (counter >= minValue) {
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
