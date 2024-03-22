// secondlanding page

import { RiArrowRightSLine } from "react-icons/ri";

export default function AppFeatures() {
  return (
    <div className="flex flex-col max-w-7xl">
      <div className="flex flex-col">
        <h3 className="text-orange-800 font-semibold uppercase text-sm">
          why skin-sha
        </h3>
        <h2 className="text-3xl font-semibold  text-yellow-900">
          Created to discover your best skin ever.Beautiful Skin is a Journey,
          and We're Your Trusted Navigator
        </h2>
        <div className="flex">
          <a
            href="/about"
            className="flex items-center p-3 mt-10 text-sm rounded-lg font-semibold bg-accent hover:bg-accent/50 bg-orange-300"
          >
            About Skin-Sha <RiArrowRightSLine className="ml-2 text-md" />
          </a>
        </div>
      </div>

      {/* ------------- Features Card ------------ */}

      <div className="flex flex-col md:flex-row my-8 gap-5">
        <div className="flex flex-col gap-4 bg-[#a16207] rounded-xl border border-slate-800 p-5  w-4/5">
          <h2 className="font-semibold text-xl">Tailored Beauty Solutions</h2>
          <p className="opacity-75">
            At Skin-Sha, we understand that your skin is unique. That's why we
            offer personalized product recommendations based on your skin type,
            price range, and specific concerns. We're here to help you achieve
            your skincare goals effortlessly
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-[#a16207] rounded-xl border border-slate-800 p-5  w-4/5">
          <h2 className="font-semibold text-xl">Your Skin's Best Friend</h2>
          <p className="opacity-75">
            Why Skin-Sha? Because we're your skincare ally. Our platform
            simplifies the search for the perfect products by allowing you to
            filter and shop by your skin's specific needs. Say goodbye to
            guesswork and hello to a more radiant you.
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-[#a16207] rounded-xl border border-slate-800 p-5   w-4/5">
          <h2 className="font-semibold text-xl">Your Skin, Your Rules</h2>
          <p className="opacity-75">
            Skin-Sha empowers you to take control of your skincare journey. With
            options to shop by price, skin type, and concerns, you have the
            freedom to curate a regimen that suits your preferences and budget.
            Discover the ease and effectiveness of skincare on your terms.
          </p>
        </div>
      </div>
    </div>
  );
}
