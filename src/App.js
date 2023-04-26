import { useState } from 'react';
import Building from './Components/Building/Building';
import './App.css';
import Road from './Components/Road/Road';
import UserManual from './Components/information/user-manual/user-manual';
import AppInfo from './Components/information/real-time-info/real-time-info';

function App() {
    const [elevatorAStorey, setElevatorAStorey] = useState(0);
    const [elevatorBStorey, setElevatorBStorey] = useState(6);
    const [currentStorey, setCurrentStorey] = useState(3);
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
                At your floor: <b>Lift A</b>
            </p>
        );
    } else if (distanceElevatorB === 0) {
        isLiftHere = (
            <p>
                At your floor: <b>Lift B</b>
            </p>
        );
    } else if (distanceElevatorA && distanceElevatorB === 0) {
        isLiftHere = (
            <p>
                At your floor: <b>Both lifts</b>
            </p>
        );
    } else {
        isLiftHere = 'At your floor:';
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
