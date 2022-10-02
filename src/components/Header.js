import React from 'react';
import {fishImages} from '../scripts/fishImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faSort, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [fishTracker, setFishTracker] = React.useState(0);
    const upFishTracker = () => {setFishTracker(fishTracker + 2)};
    const resetFishTracker = () => {setFishTracker(0)};

    const checkTracker = () => {
        if (fishTracker < (fishImages.length - 3)) {
            upFishTracker();
        } else {
            resetFishTracker();
        }
    }

    

    React.useEffect(() => {
       setInterval(checkTracker, 300);
    }, [])

    return (
        <header className="header">
            <img 
                className="img-head img-head-left" 
                src={fishImages[fishTracker].link}
                alt="header fish"
                loading="eager"
            />
            <FontAwesomeIcon
                icon={faSort}
                className="fa-solid fa-sort fa-5x sort" 
            />
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
                <FontAwesomeIcon 
                icon={faMagnifyingGlass}
                className="search-button fa-solid fa-magnifying-glass"
                />
                </form>
            </div>
            <FontAwesomeIcon 
                icon={faRotate}
                className="fa-solid fa-rotate fa-5x refresh" 
            />
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