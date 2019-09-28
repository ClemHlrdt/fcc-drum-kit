import React, { Component } from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import './Drumkit.css';

class Drumkit extends Component {
    state = {
        buttonPressed: 'Press a key...',
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Display buttonPressed={this.state.buttonPressed} />
                </div>
                <div className="buttons">
                    <Button className="Button" button="Q" />
                    <Button className="Button" button="W" />
                    <Button className="Button" button="E" />
                    <Button className="Button" button="A" />
                    <Button className="Button" button="S" />
                    <Button className="Button" button="D" />
                    <Button className="Button" button="Z" />
                    <Button className="Button" button="X" />
                    <Button className="Button" button="C" />

                </div>
            </div>
        );
    }
}

export default Drumkit;