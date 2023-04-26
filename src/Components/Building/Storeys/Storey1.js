import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs';
import { AiOutlineEnter } from 'react-icons/ai';
import { IoManOutline } from 'react-icons/io5';
export default function StoreyOne({
    handleArrowClick,
    canCallElevator,
    activeArrows,
    currentStorey,
    setCurrentStorey,
    inLift,
    setInLift,
}) {
    return (
        <div className="storey storey-one">
            <div className="buttons-container">
                <div
                    onClick={() => {
                        handleArrowClick(0);
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
                        } ${inLift === true ? 'exit-lift' : ''}`}
                        onClick={() => setInLift((prevState) => !prevState)}
                    />
                </div>
            </div>
            <IoManOutline
                className={`you ${currentStorey !== 0 ? 'you-invisible' : ''} ${
                    inLift === true ? 'you-invisible' : ''
                }`}
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
    );
}
