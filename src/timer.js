import React from 'react';
import './timer.css';

const  Timer = () => {
    return <div class="row d-flex justify-content-between ">
    <div className="card col-lg-4 d-flex align-items-stretch">
    <div className="a"><p className="text text-center text-muted">20 :</p> </div>
    <div className="b"><p className="describe text-center">Hours</p> </div>
    </div>
  
    <div className="card col-lg-4 d-flex align-items-stretch">
    <div className="a"><p className="text text-center text-muted">00</p> </div>
    <div className="b"><p className="describe text-center">Minute</p> </div>
    </div>
    <div className="card col-lg-4 d-flex align-items-stretch">
    <div className="a"><p className="text text-center text-muted">:00</p> </div>
    <div className="b"><p className="describe text-center">Second</p> </div>
    
    </div>
    </div>

    
}










export default Timer;