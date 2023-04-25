import './Storeys.css';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs';

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
    if (callElevator === currentStorey) {
        setCallElevator(currentStorey);
    } else {
        setCallElevator();
    }

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

    console.log('call: ' + callElevator);
    console.log('distange A: ' + distanceElevatorA);
    console.log('distance B: ' + distanceElevatorB);
    return (
        <div className="storeys-container">
            <div className="storey storey-seven">
                <div className="buttons-container">
                    <div className="buttons-container">
                        <BiUpArrow
                            onClick={() => setCallElevator(7)}
                            className="elevator-arrow"
                        ></BiUpArrow>
                        <BiDownArrow
                            onClick={() => setCallElevator(7)}
                            className="elevator-arrow"
                        ></BiDownArrow>
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
                    <div className="buttons-container">
                        <BiUpArrow
                            onClick={() => setCallElevator(6)}
                            className="elevator-arrow"
                        ></BiUpArrow>
                        <BiDownArrow
                            onClick={() => setCallElevator(6)}
                            className="elevator-arrow"
                        ></BiDownArrow>
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
                    <div className="buttons-container">
                        <BiUpArrow
                            onClick={() => setCallElevator(5)}
                            className="elevator-arrow"
                        ></BiUpArrow>
                        <BiDownArrow
                            onClick={() => setCallElevator(5)}
                            className="elevator-arrow"
                        ></BiDownArrow>
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
                    <BiUpArrow
                        onClick={() => setCallElevator(4)}
                        className="elevator-arrow"
                    ></BiUpArrow>
                    <BiDownArrow
                        onClick={() => setCallElevator(4)}
                        className="elevator-arrow"
                    ></BiDownArrow>
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
                    <div className="buttons-container">
                        <BiUpArrow
                            onClick={() => setCallElevator(3)}
                            className="elevator-arrow"
                        ></BiUpArrow>
                        <BiDownArrow
                            onClick={() => setCallElevator(3)}
                            className="elevator-arrow"
                        ></BiDownArrow>
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
                    <div className="buttons-container">
                        <BiUpArrow
                            onClick={() => setCallElevator(2)}
                            className="elevator-arrow"
                        ></BiUpArrow>
                        <BiDownArrow
                            onClick={() => setCallElevator(2)}
                            className="elevator-arrow"
                        ></BiDownArrow>
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
                    <div className="buttons-container">
                        <BiUpArrow
                            onClick={() => setCallElevator(1)}
                            className="elevator-arrow"
                        ></BiUpArrow>
                        <BiDownArrow
                            onClick={() => setCallElevator(1)}
                            className="elevator-arrow"
                        ></BiDownArrow>
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
