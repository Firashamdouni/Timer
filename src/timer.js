import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Transform from './transform';
import './timer.css';

let Time = {
    ms:90000
}

const  Timer = () => {
    return <Transform obj = {Time} />
}

export default Timer;