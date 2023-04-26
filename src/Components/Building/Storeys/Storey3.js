import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs';
import { AiOutlineEnter } from 'react-icons/ai';
import { IoManOutline } from 'react-icons/io5';
export default function StoreyThree({
    handleArrowClick,
    canCallElevator,
    activeArrows,
    currentStorey,
    setCurrentStorey,
    inLift,
    setInLift,
}) {
    return (
        <div className="storey storey-three">
            <div className="buttons-container">
                <div
                    onClick={() => {
                        handleArrowClick(2);
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
                        } ${inLift === true ? 'exit-lift' : ''}`}
                        onClick={() => setInLift((prevState) => !prevState)}
                    />
                </div>
            </div>
            <IoManOutline
                className={`you ${currentStorey !== 2 ? 'you-invisible' : ''} ${
                    inLift === true ? 'you-invisible' : ''
                }`}
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
    );
}
