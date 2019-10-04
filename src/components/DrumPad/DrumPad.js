import React from 'react';
import './DrumPad.css';

class DrumPad extends React.Component {

    componentDidMount() {
        /* 
            Add event listener on the whole document. When a key is pressed,
            handleKeyDown will fire for all drumPads.
        */
        document.addEventListener('keydown', this.handleKeydown);
        window.focus();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    }

    // for event e, if e.keyCode is equal to the letter prop passed, play the audio
    handleKeydown = e => {
        /* 
            Check if the keyCode of the event equals the letter prop of 
            one of the drumPads, if yes, it will play the audio of the given drumPad
            starting @ the beginning, and pass the id of the drumPad to be displayed
        */
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play();
            this.audio.currentTime = 0; 
            this.props.handleClick(this.props);
        }
    }

    handleClick = () => {
        // this refers to the actual drumPad
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleClick(this.props);
    }

    render() {
        return (
            <div
                className='drum-pad'
                id={this.props.id}
                onClick={this.handleClick}
            >
                <h1>{this.props.letter}</h1>
                <audio id={this.props.letter}
                    className='clip'
                    src={this.props.src}
                    ref={ref => this.audio = ref}
                ></audio>
            </div>
        )
    }
}

export default DrumPad;