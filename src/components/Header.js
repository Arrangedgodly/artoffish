import React from 'react';
import {fishImages} from '../scripts/fishImages';

function Header() {
    const [fishTracker, setFishTracker] = React.useState(0);
    const upFishTracker = () => {setFishTracker(fishTracker + 2)};
    const resetFishTracker = () => {setFishTracker(0)};

    React.useEffect(() => {
        if (fishTracker < (fishImages.length - 3)) {
            setInterval(upFishTracker, 1000);
        } else {
            resetFishTracker();
        }
    }, [fishTracker])

    return (
        <header className="header">
            <img 
                className="img-head img-head-left" 
                src={fishImages[fishTracker].link}
                alt="header fish"
                loading="eager"
            />
            <i className="fa-solid fa-sort fa-5x sort"></i>
            <div className="text-wrapper">
            <h1 className="text-main text-center">
                <span className="text-main-span">ART</span>
                OFFISH
            </h1>
            <p className="text-desc text-center">The Art Gallery powered by AI</p>
            <p className="text-subdesc text-center"></p>
            <form className="search-form">
                <label htmlFor="search">Search
                <input
                    className="search"
                    name="search"
                    type="text"
                    minLength="1"
                    maxLength="200"
                    />
                </label>
                <button 
                type="submit"
                className="search-button fa-solid fa-magnifying-glass"
                ></button>
                </form>
            </div>
            <i className="fa-solid fa-rotate fa-5x refresh"></i>
            <img 
                className="img-head img-head-right" 
                src={fishImages[fishTracker + 1].link}
                alt="header fish"
                loading="eager"
            />
        </header>
    );
}

export default Header;