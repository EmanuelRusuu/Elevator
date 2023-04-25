import { useState } from 'react';
import Building from './Components/Building/Building';
import './App.css';

function App() {
    const [elevatorAStorey, setElevatorAStorey] = useState(1);
    const [elevatorBStorey, setElevatorBStorey] = useState(7);
    const [currentStorey, setCurrentStorey] = useState(4);
    const [callElevator, setCallElevator] = useState();

    let distanceElevatorA;
    let distanceElevatorB;

    if (currentStorey - elevatorAStorey > 0) {
        distanceElevatorA = currentStorey - elevatorAStorey;
    } else if (currentStorey - elevatorAStorey < 0) {
        distanceElevatorA = elevatorAStorey - currentStorey;
    } else {
        distanceElevatorA = 0;
    }

    if (currentStorey - elevatorBStorey > 0) {
        distanceElevatorB = currentStorey - elevatorBStorey;
    } else if (currentStorey - elevatorBStorey < 0) {
        distanceElevatorB = elevatorBStorey - currentStorey;
    } else {
        distanceElevatorB = 0;
    }

    let elevatorIsCalled;

    if (callElevator === currentStorey) {
        elevatorIsCalled = currentStorey;
    } else {
        elevatorIsCalled = 'Call the elevator on your floor!';
    }

    return (
        <div className="App">
            <div className="sky">
                <div className="lift-names-container">
                    <div className="lift-names">
                        <p className="lift-name">Lift A</p>
                        <p className="lift-name">Lift B</p>
                    </div>
                </div>
                <div className="app-information">
                    <p>{`You are at floor: ${currentStorey}`}</p>
                    <p>{`Called the elevator at floor: ${elevatorIsCalled} `}</p>
                    <br></br>
                    <p>{`Lift A is at floor: ${elevatorAStorey}`}</p>
                    <p>{`Lift B is at floor: ${elevatorBStorey}`}</p>
                    <br></br>
                    <p>{`Lift A is ${distanceElevatorA}`}</p>
                    <p>{`Lift B is ${distanceElevatorB}`}</p>
                </div>
                <Building
                    elevatorAStorey={elevatorAStorey}
                    setElevatorAStorey={setElevatorAStorey}
                    elevatorBStorey={elevatorBStorey}
                    setElevatorBStorey={setElevatorBStorey}
                    currentStorey={currentStorey}
                    setCurrentStorey={setCurrentStorey}
                    callElevator={callElevator}
                    setCallElevator={setCallElevator}
                    distanceElevatorA={distanceElevatorA}
                    distanceElevatorB={distanceElevatorB}
                />
            </div>
            <div className="road">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default App;
