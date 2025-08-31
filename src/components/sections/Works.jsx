import { useEffect, useState } from "react";
import { PiCursor } from "react-icons/pi";
import SubHeader from "../ui/SubHeader";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import worksData from "../../data/worksData";


const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % worksData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? worksData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % worksData.length);
  };

  return (
    <section
      id="works"
      className="works-bg relative flex items-center justify-center lg:py-24 py-16"
    >
      <div className="px-4 xs:px-12 md:px-28 space-y-10">
        <SubHeader
          title={"Works"}
          details={"I had the pleasure of working with these awesome projects"}
        />

        <div className="relative">
          {/* Image */}
          <div className="w-full h-full p-10 transition-all duration-500">
            <img
              className="w-full h-full rounded-2xl shadow-lg"
              src={worksData[currentIndex].img}
              alt={`work-${currentIndex}`}
            />
          </div>

          {/* View Website */}
          <div className="flex justify-center items-center gap-1.5 lg:gap-2.5 absolute top-[20%] lg:top-[15%] right-[14%] xs:right-[10%] sm:right-[20%] lg:right-[20%]">
            <a
              className="font-ibm text-xs xs:text-base sm:text-lg lg:text-[24px] text-brand1 border-b md:border-b-2 border-white"
              href={worksData[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              view Website
            </a>
            <PiCursor className="text-brand1 mt-2.5 text-xs lg:text-base" />
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div>
        <div
          onClick={prevSlide}
          className="p-2.5 bg-bg1 text-white rounded-full absolute top-3/5 lg:top-1/2 left-5 md:left-[12%] lg:left-[15%] cursor-pointer"
        >
          <IoIosArrowBack />
        </div>
        <div
          onClick={nextSlide}
          className="p-2.5 bg-bg1 text-white rounded-full absolute top-3/5 lg:top-1/2 right-5 md:right-[10%] lg:right-[12%] cursor-pointer"
        >
          <IoIosArrowForward />
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-10 flex gap-2">
        {worksData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-brand1" : "bg-gray"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
