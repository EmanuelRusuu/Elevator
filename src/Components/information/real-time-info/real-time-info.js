import './real-time-info.css';
export default function AppInfo({
    currentStorey,
    isInsideLift,
    elevatorAStorey,
    elevatorBStorey,
    elevatorIsCalled,
    distanceElevatorA,
    distanceElevatorB,
    isLiftHere,
}) {
    return (
        <div className="app-information">
            <p>{`You are at floor: ${currentStorey + 1}${isInsideLift}`}</p>
            <p>{`Elevator called at floor: ${elevatorIsCalled}`}</p>
            <p>{isLiftHere}</p>
            <br></br>
            <p>{`Lift A is at floor: ${elevatorAStorey + 1}`}</p>
            <p>{`Lift B is at floor: ${elevatorBStorey + 1}`}</p>
            <br></br>
            <p>{`Lift A is ${distanceElevatorA} floors away`}</p>
            <p>{`Lift B is ${distanceElevatorB} floors away`}</p>
        </div>
    );
}
