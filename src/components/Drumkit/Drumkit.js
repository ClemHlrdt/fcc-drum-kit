import React, { Component } from 'react';
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
            recording: false,
            sequence: []
        }
    }

    handleClick = sound => {
        // if recording, display & save name
        //console.log(sound);
        if(this.state.recording) {
            this.setState({
                display: sound.id,
                sequence: this.state.sequence.concat(sound)
            })
        } else {
        // else display
            this.setState({
                display:sound.id
            })
        }
        
    }

    handleRecording = () => {
        this.setState(prevState => ({
            recording: !prevState.recording
        }))
    }
    componentDidMount(){
        //this.handlePlay();
    }

    handlePlay = () => {
        var playlist = this.state.sequence;
        if(this.state.sequence.length > 0){
            let audio = new Audio();
            audio.src = playlist[0].src;
            console.log(audio.src);
            let index = 1;
            audio.currentTime = 0;
            audio.play();
            audio.onended = function () {
                if (index < playlist.length) {
                    audio.src = playlist[index].src;
                    audio.currentTime = 0;
                    audio.play();
                    index++;
                }
            };
        } else {
            console.log('Empty array');
        }
    }

    handleStop = () => {
        this.setState({sequence: []})
    }

    render() {
        const {recording} = this.state;
        return (
            <div className="container">
                <div >
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
                    
                    <div className="button" onClick={this.handleRecording}>
                        <span className={`dot ${recording ? "recording" : ""}`}></span>
                    </div>
                    <div className="button" onClick={this.handlePlay}>
                        <i className="fas fa-play"></i>
                    </div>
                    <div className="button" onClick={this.handleStop}>
                        <i className="fas fa-stop"></i>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Drumkit;