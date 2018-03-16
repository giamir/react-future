import React from 'react';
import { VictoryPie, VictoryContainer } from 'victory';

import './TimeSlicing.css';

const selectColor = (inputFeedbackDelay) => {
    return inputFeedbackDelay < 20 ? 'green' :
        inputFeedbackDelay > 50 ? 'red' : 'yellow';
};

export default function Clock({ inputFeedbackDelay }) {
    return (
        <div className="Clock">
            <VictoryPie
                animate={{ duration: 1000, easing: "quadOut" }}
                groupComponent={<g className="Fps" />}
                containerComponent={<VictoryContainer responsive={false}/>}
                style={{
                    data: { fill: '#fafafa', stroke: 'black', strokeWidth: 3 },
                    labels: { fontSize: 0 }
                }}
                padding={5}
                width={200}
                height={200}
                data={[
                    { y: 500 },
                    { y: inputFeedbackDelay + 10, fill: selectColor(inputFeedbackDelay) },
                    { y: 2, fill: 'black' }
                ]}
            />
        </div>
    );
}
