import './LiftA.css';
export default function LiftA({ elevatorAStorey, setElevatorAStorey }) {
    const isOne = elevatorAStorey === 1;
    const isTwo = elevatorAStorey === 2;
    const isThree = elevatorAStorey === 3;
    const isFour = elevatorAStorey === 4;
    const isFive = elevatorAStorey === 5;
    const isSix = elevatorAStorey === 6;
    const isSeven = elevatorAStorey === 7;

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
            <div className={`lift lift-a`}>
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
                                ${isFour ? 'segment-active' : ''} ${
                                    isFive ? 'segment-active' : ''
                                } ${isSix ? 'segment-active' : ''} ${
                                    isSeven ? 'segment-active' : ''
                                }`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="lift-buttons-container">
                    <button
                        onClick={() => setElevatorAStorey(1)}
                        className="lift-button lift-button-1"
                    >
                        1
                    </button>
                    <button
                        onClick={() => setElevatorAStorey(2)}
                        className="lift-button lift-button-2"
                    >
                        2
                    </button>
                    <button
                        onClick={() => setElevatorAStorey(3)}
                        className="lift-button lift-button-3"
                    >
                        3
                    </button>
                    <button
                        onClick={() => setElevatorAStorey(4)}
                        className="lift-button lift-button-4"
                    >
                        4
                    </button>
                    <button
                        onClick={() => setElevatorAStorey(5)}
                        className="lift-button lift-button-5"
                    >
                        5
                    </button>
                    <button
                        onClick={() => setElevatorAStorey(6)}
                        className="lift-button lift-button-6"
                    >
                        6
                    </button>
                    <button
                        onClick={() => setElevatorAStorey(7)}
                        className="lift-button lift-button-7"
                    >
                        7
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