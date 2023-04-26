import { useEffect, useState } from 'react';
import './Storeys.css';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs';
import { AiOutlineEnter } from 'react-icons/ai';
import { IoManOutline } from 'react-icons/io5';

export default function Storeys({
    currentStorey,
    setCurrentStorey,
    callElevator,
    setCallElevator,
    distanceElevatorA,
    distanceElevatorB,
    setElevatorAStorey,
    setElevatorBStorey,
    inLift,
    setInLift,
}) {
    const [activeArrows, setActiveArrows] = useState();

    if (callElevator === currentStorey) {
        setCallElevator(currentStorey);
    } else {
        setCallElevator();
    }

    useEffect(() => {
        if (callElevator !== null) {
            callingElevator();
        }
        if (callElevator === currentStorey) {
            setActiveArrows(currentStorey);
        }
    }, [callElevator, currentStorey]);

    function callingElevator() {
        if (
            currentStorey === callElevator &&
            distanceElevatorA <= distanceElevatorB
        ) {
            setElevatorAStorey(currentStorey);
        } else if (
            currentStorey === callElevator &&
            distanceElevatorA > distanceElevatorB
        ) {
            setElevatorBStorey(currentStorey);
        }
    }

    let canCallElevator;
    if (currentStorey) {
        canCallElevator = currentStorey;
    }

    function handleArrowClick(currentStorey) {
        setCallElevator(currentStorey);
    }

    console.log('in lift: ' + inLift);

    return (
        <div className="storeys-container">
            <div className="storey storey-seven">
                <div className="buttons-container">
                    <div className="elevator-arrows">
                        <BiUpArrow
                            onClick={() => {
                                handleArrowClick(7);
                                // setActiveArrows(7);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 7 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 7 ? 'can-call-elevator' : ''
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(7);
                                // setActiveArrows(7);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 7 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 7 ? 'can-call-elevator' : ''
                            }`}
                        />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 7
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }`}
                            onClick={() => setInLift((prevState) => !prevState)}
                        />
                    </div>
                </div>
                <IoManOutline
                    className={`you ${
                        currentStorey !== 7 ? 'you-invisible' : ''
                    } ${inLift === true ? 'you-invisible' : ''}`}
                />
                <div
                    onClick={
                        inLift === false
                            ? () => setCurrentStorey(7)
                            : () => setCurrentStorey(currentStorey)
                    }
                    className={`storey-door ${
                        inLift === true ? 'storey-door-unavailable' : ' '
                    }`}
                >
                    {currentStorey === 7 && inLift === false ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
            <div className="storey storey-six storey-odd">
                <div className="buttons-container">
                    <div className="elevator-arrows">
                        <BiUpArrow
                            onClick={() => {
                                handleArrowClick(6);
                                // setActiveArrows(6);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 6 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 6 ? 'can-call-elevator' : ''
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(6);
                                // setActiveArrows(6);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 6 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 6 ? 'can-call-elevator' : ''
                            }`}
                        />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 6
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }`}
                            onClick={() => setInLift((prevState) => !prevState)}
                        />
                    </div>
                </div>
                <IoManOutline
                    className={`you ${
                        currentStorey !== 6 ? 'you-invisible' : ''
                    } ${inLift === true ? 'you-invisible' : ''}`}
                />
                <div
                    onClick={
                        inLift === false
                            ? () => setCurrentStorey(6)
                            : () => setCurrentStorey(currentStorey)
                    }
                    className={`storey-door ${
                        inLift === true ? 'storey-door-unavailable' : ' '
                    }`}
                >
                    {currentStorey === 6 && inLift === false ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
            <div className="storey storey-five">
                <div className="buttons-container">
                    <div className="elevator-arrows">
                        <BiUpArrow
                            onClick={() => {
                                handleArrowClick(5);
                                // setActiveArrows(5);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 5 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 5 ? 'can-call-elevator' : ''
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(5);
                                // setActiveArrows(5);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 5 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 5 ? 'can-call-elevator' : ''
                            }`}
                        />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 5
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }`}
                            onClick={() => setInLift((prevState) => !prevState)}
                        />
                    </div>
                </div>
                <IoManOutline
                    className={`you ${
                        currentStorey !== 5 ? 'you-invisible' : ''
                    } ${inLift === true ? 'you-invisible' : ''}`}
                />
                <div
                    onClick={
                        inLift === false
                            ? () => setCurrentStorey(5)
                            : () => setCurrentStorey(currentStorey)
                    }
                    className={`storey-door ${
                        inLift === true ? 'storey-door-unavailable' : ' '
                    }`}
                >
                    {currentStorey === 5 && inLift === false ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
            <div className="storey storey-four storey-odd">
                <div className="buttons-container">
                    <div className="elevator-arrows">
                        <BiUpArrow
                            onClick={() => {
                                handleArrowClick(4);
                                // setActiveArrows(4);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 4 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 4 ? 'can-call-elevator' : ''
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(4);
                                // setActiveArrows(4);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 4 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 4 ? 'can-call-elevator' : ''
                            }`}
                        />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 4
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }  ${inLift === true ? 'exit-lift' : ''}`}
                            onClick={() => setInLift((prevState) => !prevState)}
                        />
                    </div>
                </div>
                <IoManOutline
                    className={`you ${
                        currentStorey !== 4 ? 'you-invisible' : ''
                    } ${inLift === true ? 'you-invisible' : ''}`}
                />
                <div
                    onClick={
                        inLift === false
                            ? () => setCurrentStorey(4)
                            : () => setCurrentStorey(currentStorey)
                    }
                    className={`storey-door ${
                        inLift === true ? 'storey-door-unavailable' : ' '
                    }`}
                >
                    {currentStorey === 4 && inLift === false ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
            <div className="storey storey-three">
                <div className="buttons-container">
                    <div className="elevator-arrows">
                        <BiUpArrow
                            onClick={() => {
                                handleArrowClick(3);
                                // setActiveArrows(3);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 3 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 3 ? 'can-call-elevator' : ''
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(3);
                                // setActiveArrows(3);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 3 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 3 ? 'can-call-elevator' : ''
                            }`}
                        />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 3
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }`}
                            onClick={() => setInLift((prevState) => !prevState)}
                        />
                    </div>
                </div>
                <IoManOutline
                    className={`you ${
                        currentStorey !== 3 ? 'you-invisible' : ''
                    } ${inLift === true ? 'you-invisible' : ''}`}
                />
                <div
                    onClick={
                        inLift === false
                            ? () => setCurrentStorey(3)
                            : () => setCurrentStorey(currentStorey)
                    }
                    className={`storey-door ${
                        inLift === true ? 'storey-door-unavailable' : ' '
                    }`}
                >
                    {currentStorey === 3 && inLift === false ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
            <div className="storey storey-two storey-odd">
                <div className="buttons-container">
                    <div className="elevator-arrows">
                        <BiUpArrow
                            onClick={() => {
                                handleArrowClick(2);
                                // setActiveArrows(2);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 2 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 2 ? 'can-call-elevator' : ''
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(2);
                                // setActiveArrows(2);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 2 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 2 ? 'can-call-elevator' : ''
                            }`}
                        />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 2
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }`}
                            onClick={() => setInLift((prevState) => !prevState)}
                        />
                    </div>
                </div>
                <IoManOutline
                    className={`you ${
                        currentStorey !== 2 ? 'you-invisible' : ''
                    } ${inLift === true ? 'you-invisible' : ''}`}
                />
                <div
                    onClick={
                        inLift === false
                            ? () => setCurrentStorey(2)
                            : () => setCurrentStorey(currentStorey)
                    }
                    className={`storey-door ${
                        inLift === true ? 'storey-door-unavailable' : ' '
                    }`}
                >
                    {currentStorey === 2 && inLift === false ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
            <div className="storey storey-one">
                <div className="buttons-container">
                    <div className="elevator-arrows">
                        <BiUpArrow
                            onClick={() => {
                                handleArrowClick(1);
                                // setActiveArrows(1);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 1 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 1 ? 'can-call-elevator' : ''
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(1);
                                // setActiveArrows(1);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 1 ? 'active-arrow' : ' '
                            } ${
                                canCallElevator === 1 ? 'can-call-elevator' : ''
                            }`}
                        />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 1
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }`}
                            onClick={() => setInLift((prevState) => !prevState)}
                        />
                    </div>
                </div>
                <IoManOutline
                    className={`you ${
                        currentStorey !== 1 ? 'you-invisible' : ''
                    } ${inLift === true ? 'you-invisible' : ''}`}
                />
                <div
                    onClick={
                        inLift === false
                            ? () => setCurrentStorey(1)
                            : () => setCurrentStorey(currentStorey)
                    }
                    className={`storey-door ${
                        inLift === true ? 'storey-door-unavailable' : ' '
                    }`}
                >
                    {currentStorey === 1 && inLift === false ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
        </div>
    );
}
