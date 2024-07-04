import { useState, useEffect } from "react";

const TourElement = ({ tour, isHovered, onMouseEnter, onMouseLeave, onClick, currentContent }) => {
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
      className={`relative group ${isHovered ? "scale-105" : ""} transition-transform duration-300 ease-in-out text-black`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
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

export default TourElement;