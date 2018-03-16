import React from 'react';
import { VictoryScatter } from 'victory';

export default function Chart({ data }) {
    return (
         <VictoryScatter
             style={{ data: { fill: 'black' } }}
             padding={10}
             height={200}
             maxBubbleSize={25}
             minBubbleSize={5}
             data={data}
         />
    );
}
