// landing page div


import AppFeatures from "./AppFeatures";
import FeaturedProjects from "./FeaturedProjects";
import Appdescription from "./Appdescription"

function Featured() {
  return (
    <div>
    <div className="flex items-center justify-center flex-col text-white bg-orange-100 relative px-4 z-[1] gap-12 md:py-20 md:gap-32 lg:py-30 lg:gap-40">

      {/* ------------- Features ------------ */}

      <AppFeatures />
     


      {/* -------------Featured Projects ------------ */}
      <FeaturedProjects />
      </div>
      <div className="flex items-center justify-center flex-col text-white bg-[#fff7ed] relative px-5 z-[1] gap-12 md:py-32 md:gap-32 lg:py-60 lg:gap-40">
      <Appdescription />
    

    
    </div>
    </div>
  );
}

export default Featured;
