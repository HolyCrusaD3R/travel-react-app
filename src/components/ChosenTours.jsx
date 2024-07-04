import { useState } from "react";

import TourElement from "./TourElement";

const ChosenTours = ({ currentContent, chosenTours }) => {

    const [hoveredTour, setHoveredTour] = useState(null);

    const handleMouseEnter = (tourId) => {
        setHoveredTour(tourId);
    };

    const handleMouseLeave = () => {
        setHoveredTour(null);
    };

    const handleBuy = () => {
        alert("Tours Bought!")
    };

    return (<>
        <div className="flex flex-col justify-center items-center">
            <p>
                {currentContent.Total}: {chosenTours.reduce((acc,tour) => {
                    return acc+tour.price;
                },0)}$
            </p>
            <button 
                onClick={handleBuy} 
                className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 mt-2" 
            >Buy</button>
        </div>
        <div className="p-4 grid grid-cols-1 gap-4">
            {chosenTours.map((tour) => (
                <TourElement
                    key={tour.id + tour.name}
                    tour={tour}
                    isHovered={hoveredTour === tour.id}
                    onMouseEnter={() => handleMouseEnter(tour.id)}
                    onMouseLeave={handleMouseLeave}
                    currentContent={currentContent}
                />
            ))}
        </div>
    </>);
}

export default ChosenTours;