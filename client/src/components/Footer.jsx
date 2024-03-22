function Footer() {
  return (
      <footer className=" p-10 bg-[#854d0e] text-white gap-4 grid-cols-4 flex flex-col items-center justify-center   ">
      <img
        src="/Logo.jpg"
        alt=""
        className="filter bg-blend-multiply rounded-lg w-1/12"
      />
      <div>
        <h1 className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
         Skin-sha | All credits goes to team.
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
