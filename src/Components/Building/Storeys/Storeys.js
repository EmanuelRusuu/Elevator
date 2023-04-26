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

    // could add timeout to function:
    function handleArrowClick(currentStorey) {
        setCallElevator(currentStorey);
    }

    /* Every storey contains: 
    - door (on click - changes floor)
    - arrows up/down (onclick - calls elevator)
    - enter/exit arrow (onclick - enters/leaves the elevator)
    - arrows turn orange when elevator has arrived (when elevator is called ln.21(callElevator === currentStorey) -> {setActiveArrows(currentStorey)} ex: floor 6 = activeArrows 6;
    - enter/exit arrow only appears when the elevator is called and when it arrives, condition: ex:(activeArrows === 6 && currentStorey === 6)
    - it rotates in addition to inLift`s value, if it`s true, arrow leads to the lift and vice-versa
*/

    return (
        <div className="storeys-container">
            {/*----------------------------------------------------------- STOREY 6 ----------------------------------------------------------- */}
            <div className="storey storey-seven">
                <div className="buttons-container">
                    <div
                        onClick={() => {
                            handleArrowClick(6);
                        }}
                        className={`elevator-arrows elevator-arrow ${
                            activeArrows === 6 ? 'active-arrow' : ' '
                        } ${canCallElevator === 6 ? 'can-call-elevator' : ''}`}
                    >
                        <BiUpArrow />
                        <BiDownArrow />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 6 && currentStorey === 6
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }  ${inLift === true ? 'exit-lift' : ''}`}
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

            {/*----------------------------------------------------------- STOREY 5 ----------------------------------------------------------- */}
            <div className="storey storey-six storey-odd">
                <div className="buttons-container">
                    <div
                        onClick={() => {
                            handleArrowClick(5);
                            // setActiveArrows(5);
                        }}
                        className={`elevator-arrows elevator-arrow ${
                            activeArrows === 5 ? 'active-arrow' : ' '
                        } ${canCallElevator === 5 ? 'can-call-elevator' : ''}`}
                    >
                        <BiUpArrow />
                        <BiDownArrow />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 5 && currentStorey === 5
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }  ${inLift === true ? 'exit-lift' : ''}`}
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

            {/*----------------------------------------------------------- STOREY 4 ----------------------------------------------------------- */}
            <div className="storey storey-five">
                <div className="buttons-container">
                    <div
                        onClick={() => {
                            handleArrowClick(4);
                            // setActiveArrows(4);
                        }}
                        className={`elevator-arrows elevator-arrow ${
                            activeArrows === 4 ? 'active-arrow' : ' '
                        } ${canCallElevator === 4 ? 'can-call-elevator' : ''}`}
                    >
                        <BiUpArrow />
                        <BiDownArrow />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 4 && currentStorey === 4
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }   ${inLift === true ? 'exit-lift' : ''}`}
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

            {/*----------------------------------------------------------- STOREY 3 ----------------------------------------------------------- */}
            <div className="storey storey-four storey-odd">
                <div className="buttons-container">
                    <div
                        onClick={() => {
                            handleArrowClick(3);
                            // setActiveArrows(3);
                        }}
                        className={`elevator-arrows elevator-arrow ${
                            activeArrows === 3 ? 'active-arrow' : ' '
                        } ${canCallElevator === 3 ? 'can-call-elevator' : ''}`}
                    >
                        <BiUpArrow />
                        <BiDownArrow />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 3 && currentStorey === 3
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }  ${inLift === true ? 'exit-lift' : ''}`}
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

            {/*----------------------------------------------------------- STOREY 2 ----------------------------------------------------------- */}
            <div className="storey storey-three">
                <div className="buttons-container">
                    <div
                        onClick={() => {
                            handleArrowClick(2);
                            // setActiveArrows(2);
                        }}
                        className={`elevator-arrows elevator-arrow ${
                            activeArrows === 2 ? 'active-arrow' : ' '
                        } ${canCallElevator === 2 ? 'can-call-elevator' : ''}`}
                    >
                        <BiUpArrow />
                        <BiDownArrow />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 2 && currentStorey === 2
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }   ${inLift === true ? 'exit-lift' : ''}`}
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

            {/*----------------------------------------------------------- STOREY 1 ----------------------------------------------------------- */}
            <div className="storey storey-two storey-odd">
                <div className="buttons-container">
                    <div
                        onClick={() => {
                            handleArrowClick(1);
                            // setActiveArrows(1);
                        }}
                        className={`elevator-arrows elevator-arrow ${
                            activeArrows === 1 ? 'active-arrow' : ' '
                        } ${canCallElevator === 1 ? 'can-call-elevator' : ''}`}
                    >
                        <BiUpArrow />
                        <BiDownArrow />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 1 && currentStorey === 1
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }   ${inLift === true ? 'exit-lift' : ''}`}
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

            {/*----------------------------------------------------------- STOREY 0 ----------------------------------------------------------- */}
            <div className="storey storey-one">
                <div className="buttons-container">
                    <div
                        onClick={() => {
                            handleArrowClick(0);
                            // setActiveArrows(0);
                        }}
                        className={`elevator-arrows elevator-arrow ${
                            activeArrows === 0 ? 'active-arrow' : ' '
                        } ${canCallElevator === 0 ? 'can-call-elevator' : ''}`}
                    >
                        <BiUpArrow />
                        <BiDownArrow />
                    </div>
                    <div className="enter-lift-container">
                        <AiOutlineEnter
                            className={`enter-lift-button ${
                                activeArrows === 0 && currentStorey === 0
                                    ? 'enter-lift-button-available'
                                    : ' '
                            }   ${inLift === true ? 'exit-lift' : ''}`}
                            onClick={() => setInLift((prevState) => !prevState)}
                        />
                    </div>
                </div>
                <IoManOutline
                    className={`you ${
                        currentStorey !== 0 ? 'you-invisible' : ''
                    } ${inLift === true ? 'you-invisible' : ''}`}
                />
                <div
                    onClick={
                        inLift === false
                            ? () => setCurrentStorey(0)
                            : () => setCurrentStorey(currentStorey)
                    }
                    className={`storey-door ${
                        inLift === true ? 'storey-door-unavailable' : ' '
                    }`}
                >
                    {currentStorey === 0 && inLift === false ? (
                        <BsDoorOpen className="door-open"></BsDoorOpen>
                    ) : (
                        <BsDoorClosed></BsDoorClosed>
                    )}
                </div>
            </div>
        </div>
    );
}
