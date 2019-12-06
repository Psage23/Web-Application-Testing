import React from 'react';
import AtPlateCount from './Dashboard';

//display the count of balls and strikes for the at-bat 
//should be updated when the user records activity on the Dashboard component

export default function Batter(props) {
    return (
        <div>
            <AtPlateCount />
        </div>
    )
}