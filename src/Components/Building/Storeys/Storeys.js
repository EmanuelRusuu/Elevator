import { useEffect, useState } from 'react';
import './Storeys.css';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs';
import { AiOutlineEnter } from 'react-icons/ai';

export default function Storeys({
    currentStorey,
    setCurrentStorey,
    callElevator,
    setCallElevator,
    distanceElevatorA,
    distanceElevatorB,
    setElevatorAStorey,
    setElevatorBStorey,
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

    function handleArrowClick(currentStorey) {
        setCallElevator(currentStorey);
    }

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
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(7);
                                // setActiveArrows(7);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 7 ? 'active-arrow' : ' '
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
                        />
                    </div>
                </div>
                <div
                    onClick={() => setCurrentStorey(7)}
                    className="storey-door"
                >
                    {currentStorey === 7 ? (
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
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(6);
                                // setActiveArrows(6);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 6 ? 'active-arrow' : ' '
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
                        />
                    </div>
                </div>
                <div
                    onClick={() => setCurrentStorey(6)}
                    className="storey-door"
                >
                    {currentStorey === 6 ? (
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
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(5);
                                // setActiveArrows(5);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 5 ? 'active-arrow' : ' '
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
                        />
                    </div>
                </div>
                <div
                    onClick={() => setCurrentStorey(5)}
                    className="storey-door"
                >
                    {currentStorey === 5 ? (
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
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(4);
                                // setActiveArrows(4);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 4 ? 'active-arrow' : ' '
                            }`}
                        />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 4
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }`}
                        />
                    </div>
                </div>
                <div
                    onClick={() => setCurrentStorey(4)}
                    className="storey-door"
                >
                    {currentStorey === 4 ? (
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
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(3);
                                // setActiveArrows(3);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 3 ? 'active-arrow' : ' '
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
                        />
                    </div>
                </div>
                <div
                    onClick={() => setCurrentStorey(3)}
                    className="storey-door"
                >
                    {currentStorey === 3 ? (
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
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(2);
                                // setActiveArrows(2);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 2 ? 'active-arrow' : ' '
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
                        />
                    </div>
                </div>
                <div
                    onClick={() => setCurrentStorey(2)}
                    className="storey-door"
                >
                    {currentStorey === 2 ? (
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
                            }`}
                        />
                        <BiDownArrow
                            onClick={() => {
                                handleArrowClick(1);
                                // setActiveArrows(1);
                            }}
                            className={`elevator-arrow ${
                                activeArrows === 1 ? 'active-arrow' : ' '
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
                        />
                    </div>
                </div>
                <div
                    onClick={() => setCurrentStorey(1)}
                    className="storey-door"
                >
                    {currentStorey === 1 ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
        </div>
    );
}
