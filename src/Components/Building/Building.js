import './Building.css';
import LiftA from './LiftA/LiftA';
import LiftB from './LiftB/LiftB';
import Storeys from './Storeys/Storeys';
import FloorIndex from '../floor-index';

export default function Building({
    elevatorAStorey,
    setElevatorAStorey,
    elevatorBStorey,
    setElevatorBStorey,
    currentStorey,
    setCurrentStorey,
    callElevator,
    setCallElevator,
    distanceElevatorA,
    distanceElevatorB,
    inLift,
    setInLift,
}) {
    let liftAFloorOneDirection;
    let liftBFloorOneDirection;
    let liftAFloorTwoDirection;
    let liftBFloorTwoDirection;
    let liftAFloorThreeDirection;
    let liftBFloorThreeDirection;
    let liftAFloorFourDirection;
    let liftBFloorFourDirection;
    let liftAFloorFiveDirection;
    let liftBFloorFiveDirection;
    let liftAFloorSixDirection;
    let liftBFloorSixDirection;
    let liftAFloorSevenDirection;
    let liftBFloorSevenDirection;

    if (elevatorAStorey === 0) {
        liftAFloorOneDirection = 'already here';
    } else {
        liftAFloorOneDirection = 'down';
    }

    if (elevatorBStorey === 0) {
        liftBFloorOneDirection = 'already here';
    } else {
        liftBFloorOneDirection = 'down';
    }

    if (elevatorAStorey === 1) {
        liftAFloorTwoDirection = 'already here';
    } else if (elevatorAStorey > 1) {
        liftAFloorTwoDirection = 'down';
    } else {
        liftAFloorTwoDirection = 'up';
    }

    if (elevatorBStorey === 1) {
        liftBFloorTwoDirection = 'already here';
    } else if (elevatorBStorey > 1) {
        liftBFloorTwoDirection = 'down';
    } else {
        liftBFloorTwoDirection = 'up';
    }
    if (elevatorAStorey === 2) {
        liftAFloorThreeDirection = 'already here';
    } else if (elevatorAStorey > 2) {
        liftAFloorThreeDirection = 'down';
    } else {
        liftAFloorThreeDirection = 'up';
    }

    if (elevatorBStorey === 2) {
        liftBFloorThreeDirection = 'already here';
    } else if (elevatorBStorey > 2) {
        liftBFloorThreeDirection = 'down';
    } else {
        liftBFloorThreeDirection = 'up';
    }
    if (elevatorAStorey === 3) {
        liftAFloorFourDirection = 'already here';
    } else if (elevatorAStorey > 3) {
        liftAFloorFourDirection = 'down';
    } else {
        liftAFloorFourDirection = 'up';
    }

    if (elevatorBStorey === 3) {
        liftBFloorFourDirection = 'already here';
    } else if (elevatorBStorey > 3) {
        liftBFloorFourDirection = 'down';
    } else {
        liftBFloorFourDirection = 'up';
    }
    if (elevatorAStorey === 4) {
        liftAFloorFiveDirection = 'already here';
    } else if (elevatorAStorey > 4) {
        liftAFloorFiveDirection = 'down';
    } else {
        liftAFloorFiveDirection = 'up';
    }

    if (elevatorBStorey === 4) {
        liftBFloorFiveDirection = 'already here';
    } else if (elevatorBStorey > 4) {
        liftBFloorFiveDirection = 'down';
    } else {
        liftBFloorFiveDirection = 'up';
    }
    if (elevatorAStorey === 5) {
        liftAFloorSixDirection = 'already here';
    } else if (elevatorAStorey > 5) {
        liftAFloorSixDirection = 'down';
    } else {
        liftAFloorSixDirection = 'up';
    }

    if (elevatorBStorey === 5) {
        liftBFloorSixDirection = 'already here';
    } else if (elevatorBStorey > 5) {
        liftBFloorSixDirection = 'down';
    } else {
        liftBFloorSixDirection = 'up';
    }
    if (elevatorAStorey === 6) {
        liftAFloorSevenDirection = 'already here';
    } else {
        liftAFloorSevenDirection = 'up';
    }

    if (elevatorBStorey === 6) {
        liftBFloorSevenDirection = 'already here';
    } else {
        liftBFloorSevenDirection = 'up';
    }

    return (
        <div className="building-and-index">
            <FloorIndex inLift={inLift} currentStorey={currentStorey} />
            <div className="building-container">
                <LiftA
                    elevatorAStorey={elevatorAStorey}
                    setElevatorAStorey={setElevatorAStorey}
                    setCallElevator={setCallElevator}
                    inLift={inLift}
                    setInLift={setInLift}
                    distanceElevatorA={distanceElevatorA}
                    distanceElevatorB={distanceElevatorB}
                    setCurrentStorey={setCurrentStorey}
                />
                <LiftB
                    elevatorBStorey={elevatorBStorey}
                    setElevatorBStorey={setElevatorBStorey}
                    setCallElevator={setCallElevator}
                    inLift={inLift}
                    setInLift={setInLift}
                    distanceElevatorA={distanceElevatorA}
                    distanceElevatorB={distanceElevatorB}
                    setCurrentStorey={setCurrentStorey}
                />
                <Storeys
                    currentStorey={currentStorey}
                    setCurrentStorey={setCurrentStorey}
                    callElevator={callElevator}
                    setCallElevator={setCallElevator}
                    distanceElevatorA={distanceElevatorA}
                    distanceElevatorB={distanceElevatorB}
                    setElevatorAStorey={setElevatorAStorey}
                    setElevatorBStorey={setElevatorBStorey}
                    inLift={inLift}
                    setInLift={setInLift}
                />
            </div>
            <div className="lift-and-floor-info-container">
                <div className="lift-and-floor-info-index index-first">
                    <div className="lift-and-floor-info">
                        <p>{`Lift A: ${liftAFloorSevenDirection}`}</p>
                    </div>
                    <div className="lift-and-floor-info">
                        <p>{`Lift B: ${liftBFloorSevenDirection}`}</p>
                    </div>
                </div>
                <div className="lift-and-floor-info-index">
                    <div className="lift-and-floor-info">
                        <p>{`Lift A: ${liftAFloorSixDirection}`}</p>
                    </div>
                    <div className="lift-and-floor-info">
                        <p>{`Lift B: ${liftBFloorSixDirection}`}</p>
                    </div>
                </div>
                <div className="lift-and-floor-info-index">
                    <div className="lift-and-floor-info">
                        <p>{`Lift A: ${liftAFloorFiveDirection}`}</p>
                    </div>
                    <div className="lift-and-floor-info">
                        <p>{`Lift B: ${liftBFloorFiveDirection}`}</p>
                    </div>
                </div>
                <div className="lift-and-floor-info-index">
                    <div className="lift-and-floor-info">
                        <p>{`Lift A: ${liftAFloorFourDirection}`}</p>
                    </div>
                    <div className="lift-and-floor-info">
                        <p>{`Lift B: ${liftBFloorFourDirection}`}</p>
                    </div>
                </div>
                <div className="lift-and-floor-info-index">
                    <div className="lift-and-floor-info">
                        <p>{`Lift A: ${liftAFloorThreeDirection}`}</p>
                    </div>
                    <div className="lift-and-floor-info">
                        <p>{`Lift B: ${liftBFloorThreeDirection}`}</p>
                    </div>
                </div>
                <div className="lift-and-floor-info-index">
                    <div className="lift-and-floor-info">
                        <p>{`Lift A: ${liftAFloorTwoDirection}`}</p>
                    </div>
                    <div className="lift-and-floor-info">
                        <p>{`Lift B: ${liftBFloorTwoDirection}`}</p>
                    </div>
                </div>
                <div className="lift-and-floor-info-index">
                    <div className="lift-and-floor-info">
                        <p>{`Lift A: ${liftAFloorOneDirection}`}</p>
                    </div>
                    <div className="lift-and-floor-info">
                        <p>{`Lift B: ${liftBFloorOneDirection}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
