import { useState, useEffect } from "react";

import Georgia from "../../public/DestinationPhotos/Georgia.png";
import France from "../../public/DestinationPhotos/France.png";
import Greece from "../../public/DestinationPhotos/Greece.png";
import Italy from "../../public/DestinationPhotos/Italy.png";
import Japan from "../../public/DestinationPhotos/Japan.png";
import Morroco from "../../public/DestinationPhotos/Morroco.png";

const toursData = [
    {
        id: 1,
        name: "Georgia",
        description: "Georgia Highlands Hike",
        startTime: new Date('2024-07-17T10:00:00'),
        duration: 2 * 60 * 60,
        image: Georgia
    },
    {
        id: 2,
        name: "France",
        description: "Secrets of Paris",
        startTime: new Date('2024-10-05T15:00:00'),
        duration: 5 * 60 * 60,
        image: France
    },
    {
        id: 3,
        name: "Greece",
        description: "Discover the ancient gods of the Greek",
        startTime: new Date('2025-06-08T09:00:00'),
        duration: 3 * 60 * 60,
        image: Greece
    },
    {
        id: 4,
        name: "Italy",
        description: "Travel the city built on water",
        startTime: new Date('2025-08-12T09:00:00'),
        duration: 3 * 60 * 60,
        image: Italy
    },
    {
        id: 5,
        name: "Japan",
        description: "Japanese Sakura Blossom Tour",
        startTime: new Date('2025-03-04T12:00:00'),
        duration: 1 * 60 * 60,
        image: Japan
    },
    {
        id: 6,
        name: "Morroco",
        description: "Travel the sea of sand",
        startTime: new Date('2026-11-04T12:00:00'),
        duration: 5 * 60 * 60,
        image: Morroco
    },
]

const ProductGallery = () => {

    const [hoveredTour, setHoveredTour] = useState(null);

    const handleMouseEnter = (tourId) => {
        setHoveredTour(tourId);
    }

    const handleMouseLeave = () => {
        setHoveredTour(null);
    }

    return (
        // <div className="grid grid-cols-3 gap-20 p-2 m-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-20">
            {toursData.map((tour) => (
                <TourElement
                    key={tour.id}
                    tour={tour}
                    isHovered={hoveredTour === tour.id}
                    onMouseEnter={() => handleMouseEnter(tour.id)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
}

const TourElement = ({ tour, isHovered, onMouseEnter, onMouseLeave }) => {
    const calculateTimeLeft = (startTime, duration) => {
        const endTime = new Date(startTime.getTime() + duration * 1000);
        const now = new Date();
        let timeLeft = Math.max(0, endTime - now);
        const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
        timeLeft -= years * (1000 * 60 * 60 * 24 * 365);

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        timeLeft -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        timeLeft -= hours * (1000 * 60 * 60);

        const minutes = Math.floor(timeLeft / (1000 * 60));
        timeLeft -= minutes * (1000 * 60);

        const seconds = Math.floor(timeLeft / 1000);
        return {
            years,
            days,
            hours, 
            minutes, 
            seconds,
        };
    };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(tour.startTime, tour.duration));
  

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(tour.startTime, tour.duration));
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    // <div
    //   className={`relative ${isHovered ? 'scale-110' : ''} transition-transform duration-300 ease-in-out`}
    //   onMouseEnter={onMouseEnter}
    //   onMouseLeave={onMouseLeave}
    // >
    //     <img src={tour.image} alt={tour.name} className="w-full h-auto" />
    //   <div className="border border-gray-200 p-4">
    //     <h3 className="font-bold">{tour.name}</h3>
    //     {isHovered && (
    //       <div className="mt-2">
    //         <p>Starts at: {tour.startTime.toLocaleTimeString()}</p>
    //         <p>Time left: {timeLeft.years}y {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div
      className={`relative group ${isHovered ? "scale-105" : ""} transition-transform duration-300 ease-in-out`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-64 object-cover rounded-md shadow-md"
      />
      <div className="absolute inset-0 bg-white bg-opacity-45 hidden group-hover:flex flex-col justify-center items-center p-4">
        <h3 className="font-bold text-lg mb-2">{tour.name}</h3>
        {isHovered && (
          <div className="text-center">
            <p className="text-sm">Starts at: {tour.startTime.toLocaleTimeString()}</p>
            <p className="text-sm">
              Time left: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductGallery;