import { RiArrowRightSLine } from "react-icons/ri";

export default function Appdescription() {
  return (
    <div className="flex flex-col max-w-7xl  ">
      <div className="flex flex-col">
        <h3 className="text-orange-800 font-semibold uppercase text-sm">
          Your Unique Skincare Journey
        </h3>
        <br />
        <h2 className="text-3xl font-semibold  text-[#a16207]">
          Skincare is an art, and we're here to make it your masterpiece.
          Whether you're a skincare enthusiast or just starting to explore the
          world of beauty.
        </h2>
       
      </div>

      {/* ------------- Features Card ------------ */}

      <div className="flex flex-col md:flex-row my-8 gap-5">
        <div className="flex flex-col gap-4   rounded-xl border border-[#fff7ed] p-5  w-full  text-center " >
          <img src="/skincare.JPG" alt=""   /><p className="text-3xl font-semibold  text-[#a16207]  font-DancingScript" > Radiant Skin Essentials </p>
          
        </div>
        <div className="flex flex-col gap-4   rounded-xl border border-[#fff7ed] p-5  w-full text-center " >
        <img src="/productlogo.JPG" alt=""   /><p className="text-3xl font-semibold  text-[#a16207]  font-DancingScript" > Top Brands </p>
          
        </div>
        <div className="flex flex-col gap-4   rounded-xl border border-[#fff7ed] p-5  w-full   text-center" >
          <img src="/bestsellers.JPG" alt=""   /><p className="text-3xl font-semibold  text-[#a16207]  font-DancingScript" >Best sellers </p>
          
        </div>
      </div>
    </div>
  );
}
