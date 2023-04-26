import { useEffect, useState } from 'react';
import './Storeys.css';
import StoreySeven from './Storey7';
import StoreySix from './Storey6';
import StoreyFive from './Storey5';
import StoreyFour from './Storey4';
import StoreyThree from './Storey3';
import StoreTwo from './Storey2';
import StoreyOne from './Storey1';

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

    let canCallElevator = currentStorey;

    // could add timeout to function:
    function handleArrowClick(currentStorey) {
        setCallElevator(currentStorey);
    }

    /* Every storey contains: 
    - door (on click - changes floor)
    - arrows up/down (onclick - calls elevator)
    - enter/exit arrow (onclick - enters/leaves the elevator)
    - arrows turn orange when elevator has arrived (when elevator is called (callElevator === currentStorey) -> {setActiveArrows(currentStorey)} ex: floor 6 = activeArrows 6;
    - enter/exit arrow only appears when the elevator is called and when it arrives, condition: ex:(activeArrows === 6 && currentStorey === 6)
    - it rotates in addition to inLift`s value, if it`s true, arrow leads to the lift and vice-versa
*/

    return (
        <div className="storeys-container">
            <StoreySeven
                handleArrowClick={handleArrowClick}
                canCallElevator={canCallElevator}
                activeArrows={activeArrows}
                currentStorey={currentStorey}
                setCurrentStorey={setCurrentStorey}
                inLift={inLift}
                setInLift={setInLift}
            />
            <StoreySix
                handleArrowClick={handleArrowClick}
                canCallElevator={canCallElevator}
                activeArrows={activeArrows}
                currentStorey={currentStorey}
                setCurrentStorey={setCurrentStorey}
                inLift={inLift}
                setInLift={setInLift}
            />
            <StoreyFive
                handleArrowClick={handleArrowClick}
                canCallElevator={canCallElevator}
                activeArrows={activeArrows}
                currentStorey={currentStorey}
                setCurrentStorey={setCurrentStorey}
                inLift={inLift}
                setInLift={setInLift}
            />
            <StoreyFour
                handleArrowClick={handleArrowClick}
                canCallElevator={canCallElevator}
                activeArrows={activeArrows}
                currentStorey={currentStorey}
                setCurrentStorey={setCurrentStorey}
                inLift={inLift}
                setInLift={setInLift}
            />
            <StoreyThree
                handleArrowClick={handleArrowClick}
                canCallElevator={canCallElevator}
                activeArrows={activeArrows}
                currentStorey={currentStorey}
                setCurrentStorey={setCurrentStorey}
                inLift={inLift}
                setInLift={setInLift}
            />
            <StoreTwo
                handleArrowClick={handleArrowClick}
                canCallElevator={canCallElevator}
                activeArrows={activeArrows}
                currentStorey={currentStorey}
                setCurrentStorey={setCurrentStorey}
                inLift={inLift}
                setInLift={setInLift}
            />
            <StoreyOne
                handleArrowClick={handleArrowClick}
                canCallElevator={canCallElevator}
                activeArrows={activeArrows}
                currentStorey={currentStorey}
                setCurrentStorey={setCurrentStorey}
                inLift={inLift}
                setInLift={setInLift}
            />
        </div>
    );
}
