import React from "react";
import ProfileCard from "./ProfileCard";
import IntroSection from "./IntroSection";
import StatsCard from "./StatsCard";

const Gellery = () => {
  return (
    <section id="gallery" className="px-4 xs:px-12 md:px-28 flex items-center justify-center py-6">
      <div className="text-center space-y-5 ">
        <h1 className="H1-U text-brand2 hidden lg:flex justify-center">
          Developer
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:space-y-10">
          <div className="lg:col-span-2 xl:col-span-1 mx-auto">
            <ProfileCard />
          </div>
          <div className="">
            <IntroSection />
          </div>
          <div className="flex justify-center items-center">
            <StatsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gellery;
