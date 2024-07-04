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

    return (<>
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