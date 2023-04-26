import './Building.css';
import LiftA from './Lifts/LiftA';
import LiftB from './Lifts/LiftB';
import Storeys from './Storeys/Storeys';
import FloorIndex from '../../Components/information/floor-index/floor-index';
import LiftFloorInfo from '../../Components/information/lift-floor-info/lift-floor-info';

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
            <LiftFloorInfo
                elevatorAStorey={elevatorAStorey}
                elevatorBStorey={elevatorBStorey}
            />
        </div>
    );
}
