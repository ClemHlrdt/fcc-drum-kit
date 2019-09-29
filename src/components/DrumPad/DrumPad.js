import React from 'react';
import './DrumPad.css';

class DrumPad extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown);
        window.focus();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = e => {
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.handleClick(this.props.id);
        }
    }

    handleClick = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleClick(this.props.id);
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