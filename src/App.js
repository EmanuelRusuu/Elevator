import { useState } from 'react';
import Building from './Components/Building/Building';
import './App.css';

function App() {
    const [elevatorAStorey, setElevatorAStorey] = useState(1);
    const [elevatorBStorey, setElevatorBStorey] = useState(7);
    const [currentStorey, setCurrentStorey] = useState(4);
    let [callElevator, setCallElevator] = useState();
    const [inLift, setInLift] = useState(false);

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
        callElevator = null;
        elevatorIsCalled = 'Call the elevator on your floor!';
    }

    let isInsideLift;

    if (inLift === true) {
        isInsideLift = ', inside the lift';
    } else {
        isInsideLift = ', outside the lift';
    }

    let isLiftHere;

    if (distanceElevatorA === 0) {
        isLiftHere = (
            <p>
                Arrived: <b>Lift A</b>
            </p>
        );
    } else if (distanceElevatorB === 0) {
        isLiftHere = (
            <p>
                Arrived: <b>Lift B</b>
            </p>
        );
    } else if (distanceElevatorA && distanceElevatorB === 0) {
        isLiftHere = (
            <p>
                Arrived: <b>Both lifts</b>
            </p>
        );
    } else {
        isLiftHere = 'Arrived:';
    }

    return (
        <div className="App">
            <div className="sky">
                <div className="app-information">
                    <p>{`You are at floor: ${currentStorey}${isInsideLift}`}</p>
                    <p>{`Elevator called at floor: ${elevatorIsCalled}`}</p>
                    <p>{isLiftHere}</p>
                    <br></br>
                    <p>{`Lift A is at floor: ${elevatorAStorey}`}</p>
                    <p>{`Lift B is at floor: ${elevatorBStorey}`}</p>
                    <br></br>
                    <p>{`Lift A is ${distanceElevatorA} floors away`}</p>
                    <p>{`Lift B is ${distanceElevatorB} floors away`}</p>
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
                    inLift={inLift}
                    setInLift={setInLift}
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
