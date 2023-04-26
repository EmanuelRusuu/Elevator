import { IoManOutline } from 'react-icons/io5';

export default function FloorIndex({ inLift, currentStorey }) {
    return (
        <div className="index">
            <div className="index-and-men-position index-first">
                <IoManOutline
                    className={`you-invisible-lift ${
                        inLift === true && currentStorey === 7 ? 'you-lift' : ''
                    }`}
                />
                <p>7</p>
            </div>
            <div className="index-and-men-position">
                <IoManOutline
                    className={`you-invisible-lift ${
                        inLift === true && currentStorey === 6 ? 'you-lift' : ''
                    }`}
                />

                <p>6</p>
            </div>
            <div className="index-and-men-position">
                <IoManOutline
                    className={`you-invisible-lift ${
                        inLift === true && currentStorey === 5 ? 'you-lift' : ''
                    }`}
                />

                <p>5</p>
            </div>
            <div className="index-and-men-position">
                <IoManOutline
                    className={`you-invisible-lift ${
                        inLift === true && currentStorey === 4 ? 'you-lift' : ''
                    }`}
                />

                <p>4</p>
            </div>
            <div className="index-and-men-position">
                <IoManOutline
                    className={`you-invisible-lift ${
                        inLift === true && currentStorey === 3 ? 'you-lift' : ''
                    }`}
                />

                <p>3</p>
            </div>
            <div className="index-and-men-position">
                <IoManOutline
                    className={`you-invisible-lift ${
                        inLift === true && currentStorey === 2 ? 'you-lift' : ''
                    }`}
                />

                <p>2</p>
            </div>
            <div className="index-and-men-position">
                <IoManOutline
                    className={`you-invisible-lift ${
                        inLift === true && currentStorey === 1 ? 'you-lift' : ''
                    }`}
                />

                <p>1</p>
            </div>
        </div>
    );
}
