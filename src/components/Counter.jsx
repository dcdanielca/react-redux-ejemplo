import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Contador: <span>{this.props.counter}</span></h1>
                 
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                </div>
                <div>
                <h1>Contador2: <span>{this.props.counter2}</span></h1>
                 
                <button onClick={this.props.increment2}>+</button>
                <button onClick={this.props.decrement2}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;