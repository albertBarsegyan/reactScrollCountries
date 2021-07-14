import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';
import ControllerContainer from './ControllerContainer';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
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
                if (counter === 0) {
                  this.setState({ counter: 0 });
                } else {
                  this.setState({ counter: counter - 1 });
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
                this.setState({ counter: counter + 1 });
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
