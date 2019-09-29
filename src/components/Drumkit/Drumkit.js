import React, { Component } from 'react';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import './Drumkit.css';

const data = [
    { id: 'Boom', letter: 'Q', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav' },
    { id: 'Clap', letter: 'W', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav' },
    { id: 'Hi Hat', letter: 'E', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav'},
    { id: 'Kick', letter: 'A', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav' },
    { id: 'Open Hat', letter: 'S', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav' },
    { id: 'Ride', letter: 'D', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/ride.wav' },
    { id: 'Snare', letter: 'Z', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav' },
    { id: 'Tink', letter: 'X', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav' },
    { id: 'Tom', letter: 'C', src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav' },
]
class Drumkit extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'Press a key...',
            sequence: []
        }
    }

    handleClick = name => this.setState({ display: name })

    componentDidMount(){
        this.handlePlay();
    }
    handlePlay = () => {
        var audio = new Audio(),
            i = 0;
        var playlist = new Array('');

        audio.addEventListener('ended', function () {
            i = ++i < playlist.length ? i : 0;
            console.log(i)
            audio.src = playlist[i];
            audio.play();
        }, true);
        audio.volume = 0.3;
        audio.loop = false;
        audio.src = playlist[0];
        audio.play();
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="display" id="display">{this.state.display}</div>
                </div>
                <div className="buttons" id="drum-pads">
                    {data.map(d => (
                        <DrumPad
                            key={d.id}
                            id={d.id}
                            letter={d.letter}
                            src={d.src}
                            handleClick={this.handleClick}
                        >

                        </DrumPad>
                    ))}
                </div>
            </div>
        );
    }
}

export default Drumkit;