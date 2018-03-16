import React, { Component } from 'react';

import Text from './Text';
import Chart from './Chart';
import Clock from './Clock';
import Switch from './Switch';

import './TimeSlicing.css';

export default class TimeSlicing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputText: "",
            inputFeedbackDelay: 0,
            isClockOn: false,
            isTimeSlicingOn: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleClock = this.toggleClock.bind(this);
        this.toggleTimeSlicing = this.toggleTimeSlicing.bind(this);
        this.updateInputFeedbackDelay = this.updateInputFeedbackDelay.bind(this);
    }

    updateInputFeedbackDelay(inputFeedbackDelay) {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }

        this.setState({ inputFeedbackDelay });

        if (inputFeedbackDelay > 0) {
            const newInputFeedbackDelay =  (inputFeedbackDelay - 10) > 0 ? (inputFeedbackDelay - 10) : 0;
            this.timeoutId = setTimeout(() => this.updateInputFeedbackDelay(newInputFeedbackDelay), 50);
        }
    }

    generateRandomDataObject() {
        return {
            x: Math.floor(Math.random() * 1000),
            y: Math.floor(Math.random() * 1000)
        }
    }

    handleChange(event) {
        const newInputText = event.target.value;
        const newData = Array.from({ length: newInputText.length * 15 }, this.generateRandomDataObject);

        const start = performance.now();

        if(this.state.isTimeSlicingOn) {
            this.setState(
                { inputText: newInputText },
                () => this.updateInputFeedbackDelay(Math.floor(performance.now() - start))
            );
            this.deferSetState({ data: newData });
        } else {
            this.setState(
                { inputText: newInputText, data: newData },
                () => this.updateInputFeedbackDelay(Math.floor(performance.now() - start))
            );
        }
    }

    toggleClock() {
        this.setState(({ isClockOn }) => ({ isClockOn: !isClockOn }));
    }

    toggleTimeSlicing() {
        this.setState(({ isTimeSlicingOn }) => ({ isTimeSlicingOn: !isTimeSlicingOn }));
    }

    render() {
        const { data, inputText, inputFeedbackDelay, isClockOn, isTimeSlicingOn } = this.state;
        return (
            <div className="TimeSlicing">
                <div className="Toggles">
                    <span>
                        <Switch on={isTimeSlicingOn} onClick={this.toggleTimeSlicing} />
                        <span>Time Slicing</span>
                    </span>
                    <span>
                        <Switch on={isClockOn} onClick={this.toggleClock} />
                        <span>Input Feedback Delay Clock</span>
                    </span>
                </div>

                <Text inputText={inputText} onChangeHandler={this.handleChange} />
                {isClockOn && <Clock inputFeedbackDelay={inputFeedbackDelay} />}
                <Chart data={data} />
            </div>
        );
    }
}