import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs';
import { AiOutlineEnter } from 'react-icons/ai';
import { IoManOutline } from 'react-icons/io5';
export default function StoreyFour({
    handleArrowClick,
    canCallElevator,
    activeArrows,
    currentStorey,
    setCurrentStorey,
    inLift,
    setInLift,
}) {
    return (
        <div className="storey storey-four storey-odd">
            <div className="buttons-container">
                <div
                    onClick={() => {
                        handleArrowClick(3);
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
                        } ${inLift === true ? 'exit-lift' : ''}`}
                        onClick={() => setInLift((prevState) => !prevState)}
                    />
                </div>
            </div>
            <IoManOutline
                className={`you ${currentStorey !== 3 ? 'you-invisible' : ''} ${
                    inLift === true ? 'you-invisible' : ''
                }`}
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
    );
}
