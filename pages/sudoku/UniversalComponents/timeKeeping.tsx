import React from 'react';
import {atom, useRecoilState} from 'recoil';
const timer = atom ({
    key: 'timer-seconds',
    default:0
})
function handleStartClick() {
    const [sec] = useRecoilState(timer);
    
    
}