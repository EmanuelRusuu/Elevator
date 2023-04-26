import { useState } from 'react';
import manIcoon from '../Assets/manicoon.jpg';
import manIcoon1 from '../Assets/manicoon1.jpg';
import usermanualfloorandlift from '../Assets/usermanual3.jpg';
import upanddownarrows from '../Assets/updownarrows.jpg';
import upanddownarrowsactive from '../Assets/updownarrowsactive.jpg';
import enter from '../Assets/enter.jpg';
import exit from '../Assets/exit.jpg';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function UserManual() {
    const [active, setActive] = useState(false);

    return (
        <div className="user-manual-container">
            <AiOutlineQuestionCircle
                onClick={() => setActive((prevState) => !prevState)}
                className={`user-manual-q`}
            />
            <div
                className={`user-manual-invisible ${
                    active === true ? 'user-manual' : ''
                }`}
            >
                <div className="user-manual-text-container">
                    <b>1 - About this app</b>
                    <br></br>
                    <p>- This is a bulding with 7 storyes and 2 lifts</p>
                    <p>- The left side of the building shows floor levels</p>
                    <p>
                        - The right side shows the necesary direction/movement
                        of the elevator to reach the N th floor
                    </p>
                    <p>- Initially Lift A is at the ground floor</p>
                    <p>- Lift B at the top floor</p>
                    <p>
                        - Whenever someone calls the lift from N th floor, the
                        lift closest to that floor comes to pick him up
                    </p>
                    <p>
                        - If both the lifts are at equidistant from the N th
                        floor, them the lift from the lower floor comes up
                    </p>
                    <p>
                        - There are navigation buttons in each floor (up / down)
                    </p>
                    <p>
                        - Inside the elevator there are buttons to select the
                        destination
                    </p>
                    <p>
                        - Seven segment displays indicate the position of the
                        lift
                    </p>
                    <p>- These are present inside the elevator</p>
                    <p>- Only one destination can be selected.</p>
                    <p>- Each elevator displays its current state.</p>
                    <p>- Each floor displays which elevator is going up/down</p>
                    <br></br>
                    <b>2 - Where am I</b>
                    <br></br>
                    <div className="user-manual-2">
                        <p>
                            - Your location will always be represented by this
                            man icoon:
                        </p>
                        <div className="user-manual-images">
                            <div className="user-manual-image-container">
                                <p>- On a floor</p>
                                <img
                                    src={manIcoon}
                                    alt="manicoon"
                                    className="user-manual-man-icoon"
                                ></img>
                            </div>
                            <div className="user-manual-image-container">
                                <p>- Inside the elevator</p>
                                <img
                                    src={manIcoon1}
                                    alt="manicoon"
                                    className="user-manual-man-icoon"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <b>3 - Go to other floors</b>
                    <br></br>
                    <></>
                    <div className="user-manual-3">
                        <p>
                            - To go to another floor, you have to be outside of
                            the lift
                        </p>
                        <p>
                            - On the top-left of the screen, you can see the
                            floor and elevator status, ex:
                        </p>
                        <img
                            src={usermanualfloorandlift}
                            alt="floorandliftinfo"
                            className="user-manual-floor-lift"
                        ></img>
                        <p>
                            - Being outside the lift, gives you permission to
                            change floors by clicking on any door
                        </p>
                        <p>- Open and black door means you are on that floor</p>
                    </div>
                    <br></br>
                    <b>4 - Call an elevator</b>
                    <br></br>
                    <p>
                        - Once you have selected the desired floor to be at, you
                        can call the elevator
                    </p>
                    <p>
                        - To call the elevator press the up/down arrow on the
                        floor you are at
                    </p>
                    <div className="user-manual-images">
                        <div className="user-manual-image-container">
                            <p>- Before </p>
                            <img
                                src={upanddownarrows}
                                alt="upanddownarrows"
                                className="user-manual-lift-buttons"
                            ></img>
                        </div>
                        <div className="user-manual-image-container">
                            <p>- After your click</p>
                            <img
                                src={upanddownarrowsactive}
                                alt="upanddownarrows"
                                className="user-manual-lift-buttons"
                            ></img>
                        </div>
                    </div>
                    <p>- The elevator closer to you will come first</p>
                    <br></br>
                    <b>5 - Enter/Leave the elevator</b>
                    <br></br>
                    <div className="user-manual-images">
                        <div className="user-manual-image-container">
                            <p>- Enter </p>
                            <img
                                src={enter}
                                alt="enterandleaveelevator"
                                className="user-manual-lift-enter-leave"
                            ></img>
                        </div>
                        <div className="user-manual-image-container">
                            <p>- Leave</p>
                            <img
                                src={exit}
                                alt="enterandleaveelevator"
                                className="user-manual-lift-enter-leave"
                            ></img>
                        </div>
                    </div>
                    <br></br>
                    <b>6 - Inside the elevator</b>
                    <br></br>
                    <p>
                        - Onece you have entered the elevator, the keypad
                        appears
                    </p>
                    <p>
                        - You can go to any floor by clicking one of the numbers
                    </p>
                    <p>
                        - The Seven Segment Display shows you at wich floor you
                        are at
                    </p>
                </div>
            </div>
        </div>
    );
}
