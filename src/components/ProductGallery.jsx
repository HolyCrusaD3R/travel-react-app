import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const ProductGallery = ({ currentContent }) => {
  console.log(currentContent);
  const toursData = currentContent.toursData;
  console.log(toursData);
  const [hoveredTour, setHoveredTour] = useState(null);
  const [sortCriteria, setSortCriteria] = useState({
    sortBy: "name", // Default sorting by name
    sortOrder: "asc", // Default ascending order
  });

  // Function to handle mouse enter
  const handleMouseEnter = (tourId) => {
    setHoveredTour(tourId);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredTour(null);
  };

  // Function to sort tours based on criteria
  const sortTours = (tours, sortBy, sortOrder) => {
    const sortedTours = [...tours];
    sortedTours.sort((a, b) => {
      if (sortBy === "name") {
        // Sort by name lexicographically
        if (sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      } else {
        // Add more sorting options based on other criteria if needed
        return 0; // Default to no sorting
      }
    });
    return sortedTours;
  };

  // Apply sorting based on current criteria
  const sortedTours = sortTours(
    toursData,
    sortCriteria.sortBy,
    sortCriteria.sortOrder
  );

  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setSortCriteria({
      ...sortCriteria,
      sortOrder: sortCriteria.sortOrder === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div className="flex flex-col items-center">
        <div className="flex justify-end mb-4 mt-20 bg-gray-800 text-white rounded-lg pl-5 pr-5 pt-2 pb-2 items-center">
            <label className="mr-2">{currentContent.SortBy}</label>
            <select
            value={sortCriteria.sortBy}
            onChange={(e) =>
                setSortCriteria({ ...sortCriteria, sortBy: e.target.value })
            }
            className="px-2 py-1 border bg-white text-gray-800 rounded-md"
            >
            <option value="name">{currentContent.Name}</option>
            <option value="none">{currentContent.None}</option>
            {/* Add more sorting options here */}
            </select>
            <button
            onClick={toggleSortOrder}
            className="ml-2 px-2 py-1 bg-white text-gray-800 rounded-md"
            >
            {sortCriteria.sortOrder === "asc" ? currentContent.Asc : currentContent.Desc}
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-20">
        {sortedTours.map((tour) => (
            <TourElement
            key={tour.id}
            tour={tour}
            isHovered={hoveredTour === tour.id}
            onMouseEnter={() => handleMouseEnter(tour.id)}
            onMouseLeave={handleMouseLeave}
            currentContent={currentContent}
            />
        ))}
        </div>
    </div>
  );
};

const TourElement = ({ tour, isHovered, onMouseEnter, onMouseLeave, currentContent }) => {
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

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(tour.startTime, tour.duration)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(tour.startTime, tour.duration));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
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
            <p className="text-sm">
              {currentContent.Starts} {tour.startTime.toLocaleTimeString()}
            </p>
            <p className="text-sm">
              {currentContent.TimeLeft} {timeLeft.years}{currentContent.Year} {timeLeft.days}{currentContent.Day} {timeLeft.hours}{currentContent.Hour} {timeLeft.minutes}{currentContent.Minute}{" "}
              {timeLeft.seconds}{currentContent.Second}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
