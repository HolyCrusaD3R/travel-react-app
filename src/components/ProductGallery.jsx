import { useState, useEffect } from "react";

import ProfileCard from "./ProfileCard";
import TourElement from "./TourElement";

const ProductGallery = ({ currentContent }) => {
  const toursData = currentContent.toursData;
  const [hoveredTour, setHoveredTour] = useState(null);
  const [sortCriteria, setSortCriteria] = useState({
    sortBy: "name",
    sortOrder: "asc",
  });
  const [filterCriteria, setFilterCriteria] = useState({
    searchTerm: "",
    country: "all",
    duration: "all",
    year: "all",
  });
  const [chosenTours, setChosenTours] = useState([]);

  const extractInteger = (tourId) => {
    const tourIdStr = tourId.toString();

    const match = tourIdStr.match(/^\d+/);

    if(match) {
      return parseInt(match[0],10);
    }
    return tourId;
  }

  const isTourChosen = (prevChosenTours, tourId) => prevChosenTours.some(tour => tour.id === tourId);

  const handleMouseEnter = (tourId) => {
    setHoveredTour(tourId);
  };

  const handleMouseLeave = () => {
    setHoveredTour(null);
  };

  const handleMouseClick = (tourId) => {
    const tourIdInt = extractInteger(tourId);
    setChosenTours((prevChosenTours) => {
      if (isTourChosen(prevChosenTours,tourIdInt)) {
        return prevChosenTours.filter((tour) => tour.id !== tourIdInt);
      } else {
        return [...prevChosenTours, ...(toursData.filter((tour) => tour.id === tourIdInt))];
      }
    });
  };

  const sortTours = (tours, sortBy, sortOrder) => {
    const sortedTours = [...tours];
    sortedTours.sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortBy === "date") {
        const dateA = new Date(a.startTime).getTime();
        const dateB = new Date(b.startTime).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return 0;
      }
    });
    return sortedTours;
  };

  const filterTours = (tours, filterCriteria) => {
    return tours.filter((tour) => {
      const matchesSearchTerm = tour.name.toLowerCase().includes(filterCriteria.searchTerm.toLowerCase()) || tour.description.toLowerCase().includes(filterCriteria.searchTerm.toLowerCase());
      const matchesCountry = filterCriteria.country === "all" || tour.name === filterCriteria.country;
      const durationFilter = filterCriteria.duration === "all" ? 0 : (filterCriteria.duration === "1hr+" || filterCriteria.duration === "1სთ+") ? 60 * 60 : (filterCriteria.duration === "3hr+" || filterCriteria.duration === "3სთ+") ? 3 * 60 * 60 : 5 * 60 * 60;
      const matchesDuration = tour.duration >= durationFilter;
      const matchesYear = filterCriteria.year === "all" || filterCriteria.year === tour.startTime.getFullYear().toString();
      return matchesSearchTerm && matchesCountry && matchesDuration && matchesYear;
    });
  };

  const sortedTours = sortTours(toursData, sortCriteria.sortBy, sortCriteria.sortOrder);
  const filteredTours = filterTours(sortedTours, filterCriteria);

  const toggleSortOrder = () => {
    setSortCriteria({
      ...sortCriteria,
      sortOrder: sortCriteria.sortOrder === "asc" ? "desc" : "asc",
    });
  };

  

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mb-4 mt-20 ml-20 mr-20 bg-gray-800 text-white rounded-lg p-5 items-center w-10/12 space-y-4 lg:space-y-0 lg:flex-row lg:justify-between">
        <div className="flex justify-start w-full mb-4">
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
            <option value="date">{currentContent.Date}</option>
            {/* Add more sorting options here */}
      console.log(filterCriteria);
          </select>
          <button
            onClick={toggleSortOrder}
            className="ml-2 px-2 py-1 bg-white text-gray-800 rounded-md"
          >
            {sortCriteria.sortOrder === "asc" ? currentContent.Asc : currentContent.Desc}
          </button>
        </div>
        <div className="flex justify-center w-full mb-4">
          <label className="mr-2">{currentContent.Search}</label>
          <input
            type="text"
            value={filterCriteria.searchTerm}
            onChange={(e) =>
              setFilterCriteria((prevFilterCriteria) => {return { ...prevFilterCriteria, searchTerm: e.target.value }})
            }
            className="px-2 py-1 border bg-white text-gray-800 rounded-md"
          />
        </div>
        <div className="flex justify-end w-full">
          <label className="mr-2">{currentContent.Country}</label>
          <select
            value={filterCriteria.country}
            onChange={(e) =>
              setFilterCriteria((prevFilterCriteria) => {return { ...prevFilterCriteria, country: e.target.value }})
            }
            className="px-2 py-1 border bg-white text-gray-800 rounded-md"
          >
            <option value="all">{currentContent.All}</option>
            <option value={currentContent.Georgia}>{currentContent.Georgia}</option>
            <option value={currentContent.France}>{currentContent.France}</option>
            <option value={currentContent.Greece}>{currentContent.Greece}</option>
            <option value={currentContent.Italy}>{currentContent.Italy}</option>
            <option value={currentContent.Japan}>{currentContent.Japan}</option>
            <option value={currentContent.Morroco}>{currentContent.Morroco}</option>
          </select>
          <label className="ml-4 mr-2">{currentContent.Duration}</label>
          <select
            value={filterCriteria.duration}
            onChange={(e) =>
              setFilterCriteria((prevFilterCriteria) => {return { ...prevFilterCriteria, duration: e.target.value }})
            }
            className="px-2 py-1 border bg-white text-gray-800 rounded-md"
          >
            <option value="all">{currentContent.All}</option>
            <option value={currentContent.OneHourPlus}>{currentContent.OneHourPlus}</option>
            <option value={currentContent.ThreeHourPlus}>{currentContent.ThreeHourPlus}</option>
            <option value={currentContent.FiveHourPlus}>{currentContent.FiveHourPlus}</option>
          </select>
          <label className="ml-4 mr-2">{currentContent.YearLabel}</label>
          <select
            value={filterCriteria.year}
            onChange={(e) =>
              setFilterCriteria((prevFilterCriteria) => {return { ...prevFilterCriteria, year: e.target.value }})
            }
            className="px-2 py-1 border bg-white text-gray-800 rounded-md"
          >
            <option value="all">{currentContent.All}</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>
      <di>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-20">
          {filteredTours.map((tour) => (
            <TourElement
              key={tour.id}
              tour={tour}
              isHovered={hoveredTour === tour.id}
              onMouseEnter={() => handleMouseEnter(tour.id)}
              onMouseLeave={handleMouseLeave}
              currentContent={currentContent}
              onClick={() => handleMouseClick(tour.id)}
            />
          ))}
        </div>
        <ProfileCard currentContent={currentContent} chosenTours={chosenTours} />
      </di>
    </div>
  );
};



export default ProductGallery;