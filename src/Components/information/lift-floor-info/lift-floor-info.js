import './list-floor-info.css';

export default function LiftFloorInfo({ elevatorAStorey, elevatorBStorey }) {
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

    /* 
    There are 14 variables, 2 for every floor, 1 variable for every lift
    - checking for every floor what direction does the elevator need to go, to reach the Nth floor (up/down/already here)
*/

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
    );
}
