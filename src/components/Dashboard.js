import React, { useState } from 'react';

//provide a button that the person in charge can press every time there is a strike, ball,foul or hit
//dont need to specify the type of hit (single, double,etc)
//changes recorded on this component should update the information shown by the Display component

export default function AtPlateCount() {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState(0);

    // add code to update the count here



    return (
        <div>
            <h1>Strike Count: {strike}</h1>
            <button onClick={() => setStrike(strike + 1)}>Strike</button>
            <h1>Ball Count: {ball}</h1>
            <button onClick={() => setBall(ball +1)}>Ball</button>
            <h1>Foul Count: {foul}</h1>
            <button onClick={() => setFoul(foul + 1)}>Foul</button>
            <h1>Hit Count: {foul}</h1>
            <button onClick={() => setHit(hit + 1)}>Hit</button>
        </div>
    )
}