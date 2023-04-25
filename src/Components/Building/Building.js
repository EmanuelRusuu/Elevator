import './Building.css';
import LiftA from './LiftA/LiftA';
import LiftB from './LiftB/LiftB';
import Storeys from './Storeys/Storeys';

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
}) {
    return (
        <div className="building-container">
            <LiftA
                elevatorAStorey={elevatorAStorey}
                setElevatorAStorey={setElevatorAStorey}
            ></LiftA>
            <LiftB
                elevatorBStorey={elevatorBStorey}
                setElevatorBStorey={setElevatorBStorey}
            ></LiftB>
            <Storeys
                currentStorey={currentStorey}
                setCurrentStorey={setCurrentStorey}
                callElevator={callElevator}
                setCallElevator={setCallElevator}
                distanceElevatorA={distanceElevatorA}
                distanceElevatorB={distanceElevatorB}
                setElevatorAStorey={setElevatorAStorey}
                setElevatorBStorey={setElevatorBStorey}
            ></Storeys>
        </div>
    );
}
