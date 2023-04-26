import { useState } from 'react';
import Building from './Components/Building/Building';
import './App.css';
import Road from './Components/Road';
import UserManual from './Components/user-manual';
import AppInfo from './Components/real-time-info';

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
        callElevator = 0;
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
                <AppInfo
                    currentStorey={currentStorey}
                    isInsideLift={isInsideLift}
                    elevatorIsCalled={elevatorIsCalled}
                    isLiftHere={isLiftHere}
                    elevatorAStorey={elevatorAStorey}
                    elevatorBStorey={elevatorBStorey}
                    distanceElevatorA={distanceElevatorA}
                    distanceElevatorB={distanceElevatorB}
                />
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
                <UserManual />
            </div>
            <Road />
        </div>
    );
}

export default App;
