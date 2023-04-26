import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs';
import { AiOutlineEnter } from 'react-icons/ai';
import { IoManOutline } from 'react-icons/io5';
export default function StoreySeven({
    handleArrowClick,
    canCallElevator,
    activeArrows,
    currentStorey,
    setCurrentStorey,
    inLift,
    setInLift,
}) {
    return (
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
                        } ${inLift === true ? 'exit-lift' : ''}`}
                        onClick={() => setInLift((prevState) => !prevState)}
                    />
                </div>
            </div>
            <IoManOutline
                className={`you ${currentStorey !== 6 ? 'you-invisible' : ''} ${
                    inLift === true ? 'you-invisible' : ''
                }`}
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
    );
}
