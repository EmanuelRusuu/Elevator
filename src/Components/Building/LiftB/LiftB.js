import './LiftB.css';
export default function LiftB({
    elevatorBStorey,
    setElevatorBStorey,
    inLift,
    distanceElevatorA,
    distanceElevatorB,
    setCurrentStorey,
    setCallElevator,
}) {
    const isOne = elevatorBStorey === 0;
    const isTwo = elevatorBStorey === 1;
    const isThree = elevatorBStorey === 2;
    const isFour = elevatorBStorey === 3;
    const isFive = elevatorBStorey === 4;
    const isSix = elevatorBStorey === 5;
    const isSeven = elevatorBStorey === 6;

    let isLiftB;

    if (distanceElevatorA === 0) {
        isLiftB = false;
    } else if (distanceElevatorB === 0) {
        isLiftB = true;
    } else if (distanceElevatorA === 0 && distanceElevatorB === 0) {
        isLiftB = false;
    }

    return (
        <div
            className={`lift-container lift-container-a ${
                isOne ? 'lift-container-a-one' : ''
            } ${isTwo ? 'lift-container-a-two' : ''} ${
                isThree ? 'lift-container-a-three' : ''
            } ${isFour ? 'lift-container-a-four' : ''} ${
                isFive ? 'lift-container-a-five' : ''
            }${isSix ? 'lift-container-a-six' : ''} ${
                isSeven ? 'lift-container-a-seven' : ''
            }
            `}
        >
            <div className="lift-name-b">
                <p>Lift B</p>
            </div>

            <div
                style={{
                    display:
                        isTwo || isThree || isFive || isSix ? 'block' : 'none',
                }}
                className="invisible-lift invisible-lift-one"
            ></div>
            <div
                style={{
                    display:
                        isTwo || isThree || isFive || isSix ? 'block' : 'none',
                }}
                className="invisible-lift invisible-lift-two"
            ></div>

            <div className="lift lift-b">
                <div className="seven-segment-display">
                    <div className="seven-segment-column">
                        <div
                            className={`segment-display segment-a ${
                                isTwo ? 'segment-active' : ''
                            } ${isThree ? 'segment-active' : ''} ${
                                isFive ? 'segment-active' : ''
                            } ${isSix ? 'segment-active' : ''} ${
                                isSeven ? 'segment-active' : ''
                            }`}
                        ></div>
                        <div
                            className={`segment-display segment-g ${
                                isTwo ? 'segment-active' : ''
                            } ${isThree ? 'segment-active' : ''} ${
                                isFour ? 'segment-active' : ''
                            } ${isFive ? 'segment-active' : ''} ${
                                isSix ? 'segment-active' : ''
                            }`}
                        ></div>
                        <div
                            className={`segment-display segment-d ${
                                isTwo ? 'segment-active' : ''
                            } ${isThree ? 'segment-active' : ''} ${
                                isFive ? 'segment-active' : ''
                            } ${isSix ? 'segment-active' : ''}`}
                        ></div>
                        <div className="row1">
                            <div
                                className={`segment-display segment-f ${
                                    isFour ? 'segment-active' : ''
                                } ${isFive ? 'segment-active' : ''} ${
                                    isSix ? 'segment-active' : ''
                                }`}
                            ></div>
                            <div
                                className={`segment-display segment-b ${
                                    isOne ? 'segment-active' : ''
                                } ${isTwo ? 'segment-active' : ''} ${
                                    isThree ? 'segment-active' : ''
                                } ${isFour ? 'segment-active' : ''} ${
                                    isSeven ? 'segment-active' : ''
                                }`}
                            ></div>
                        </div>
                        <div className="row2">
                            <div
                                className={`segment-display segment-e ${
                                    isTwo ? 'segment-active' : ''
                                }  ${isSix ? 'segment-active' : ''}`}
                            ></div>
                            <div
                                className={`segment-display segment-c ${
                                    isOne ? 'segment-active' : ''
                                } ${isThree ? 'segment-active' : ''} 
                                ${isFour ? 'segment-active' : ''}${
                                    isFive ? 'segment-active' : ''
                                } ${isSix ? 'segment-active' : ''} ${
                                    isSeven ? 'segment-active' : ''
                                }`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div
                    className={`lift-buttons-container ${
                        isLiftB === true && inLift === true
                            ? 'lift-buttons-container-opacity-b'
                            : ''
                    }`}
                >
                    <button
                        onClick={() => {
                            setElevatorBStorey(6);
                            setCurrentStorey(6);
                            setCallElevator(6);
                        }}
                        className="lift-button lift-button-7"
                    >
                        7
                    </button>
                    <button
                        onClick={() => {
                            setElevatorBStorey(5);
                            setCurrentStorey(5);
                            setCallElevator(5);
                        }}
                        className="lift-button lift-button-6"
                    >
                        6
                    </button>
                    <button
                        onClick={() => {
                            setElevatorBStorey(4);
                            setCurrentStorey(4);
                            setCallElevator(4);
                        }}
                        className="lift-button lift-button-5"
                    >
                        5
                    </button>
                    <button
                        onClick={() => {
                            setElevatorBStorey(3);
                            setCurrentStorey(3);
                            setCallElevator(3);
                        }}
                        className="lift-button lift-button-4"
                    >
                        4
                    </button>
                    <button
                        onClick={() => {
                            setElevatorBStorey(2);
                            setCurrentStorey(2);
                            setCallElevator(2);
                        }}
                        className="lift-button lift-button-3"
                    >
                        3
                    </button>

                    <button
                        onClick={() => {
                            setElevatorBStorey(1);
                            setCurrentStorey(1);
                            setCallElevator(1);
                        }}
                        className="lift-button lift-button-2"
                    >
                        2
                    </button>
                    <button
                        onClick={() => {
                            setElevatorBStorey(0);
                            setCurrentStorey(0);
                            setCallElevator(0);
                        }}
                        className="lift-button lift-button-1"
                    >
                        1
                    </button>
                </div>
            </div>
            <div
                style={{ display: isThree || isFive ? 'block' : 'none' }}
                className="invisible-lift invisible-lift-three"
            ></div>
        </div>
    );
}
