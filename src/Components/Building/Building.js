import './Building.css';
import LiftA from './LiftA/LiftA';
import LiftB from './LiftB/LiftB';
import Storeys from './Storeys/Storeys';
import { IoManOutline } from 'react-icons/io5';

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
    console.log(inLift);
    return (
        <div className="building-and-index">
            <div className="index">
                <div className="index-and-men-position index-first">
                    <IoManOutline
                        className={`you-invisible-lift ${
                            inLift === true && currentStorey === 7
                                ? 'you-lift'
                                : ''
                        }`}
                    />
                    <p>7</p>
                </div>
                <div className="index-and-men-position">
                    <IoManOutline
                        className={`you-invisible-lift ${
                            inLift === true && currentStorey === 6
                                ? 'you-lift'
                                : ''
                        }`}
                    />

                    <p>6</p>
                </div>
                <div className="index-and-men-position">
                    <IoManOutline
                        className={`you-invisible-lift ${
                            inLift === true && currentStorey === 5
                                ? 'you-lift'
                                : ''
                        }`}
                    />

                    <p>5</p>
                </div>
                <div className="index-and-men-position">
                    <IoManOutline
                        className={`you-invisible-lift ${
                            inLift === true && currentStorey === 4
                                ? 'you-lift'
                                : ''
                        }`}
                    />

                    <p>4</p>
                </div>
                <div className="index-and-men-position">
                    <IoManOutline
                        className={`you-invisible-lift ${
                            inLift === true && currentStorey === 3
                                ? 'you-lift'
                                : ''
                        }`}
                    />

                    <p>3</p>
                </div>
                <div className="index-and-men-position">
                    <IoManOutline
                        className={`you-invisible-lift ${
                            inLift === true && currentStorey === 2
                                ? 'you-lift'
                                : ''
                        }`}
                    />

                    <p>2</p>
                </div>
                <div className="index-and-men-position">
                    <IoManOutline
                        className={`you-invisible-lift ${
                            inLift === true && currentStorey === 1
                                ? 'you-lift'
                                : ''
                        }`}
                    />

                    <p>1</p>
                </div>
            </div>
            <div className="building-container">
                <LiftA
                    elevatorAStorey={elevatorAStorey}
                    setElevatorAStorey={setElevatorAStorey}
                    setCallElevator={setCallElevator}
                />
                <LiftB
                    elevatorBStorey={elevatorBStorey}
                    setElevatorBStorey={setElevatorBStorey}
                    setCallElevator={setCallElevator}
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
        </div>
    );
}
