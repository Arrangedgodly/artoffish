import React from 'react';
import Card from './Card';
import {initialCards} from '../scripts/initialCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { shuffle, checkZero, checkLast } from '../utils/constants';

const cards = shuffle(initialCards);

function Body({handleOpenModal}) {
    const [pageCount, setPageCount] = React.useState(0);

    const incrementPageCount = () => {
        setPageCount(pageCount + 1)
    };

    const decrementPageCount = () => {
        setPageCount(pageCount - 1)
    };
    
    const numberOfItems = initialCards.length;
    const numberPerPage = 180;
    const numberOfPages = Math.ceil(numberOfItems / numberPerPage);

    return (
        <div>
            <div className="arrows">
                <button
                    type='button'
                    className='button'
                    onClick={decrementPageCount}
                    disabled={checkZero(pageCount) ? false : true}
                >
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        className={checkZero(pageCount) ? 'arrow' : 'arrow arrow-disabled'}  
                    />
                </button>
                <button
                    type='button'
                    className='button'
                    onClick={incrementPageCount} 
                    disabled={checkLast(pageCount, numberOfPages) ? false : true}
                >
                    <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className={checkLast(pageCount, numberOfPages) ? 'arrow' : 'arrow arrow-disabled'}
                    />
                </button>
                
            </div>
            <div className="cards">
                <div className='page'>
                    {
                        cards.slice((pageCount * numberPerPage), ((pageCount * numberPerPage) + numberPerPage))
                            .map((card, i) => (
                                <Card
                                    data={card}
                                    handleOpenModal={handleOpenModal}
                                    key={i}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Body;