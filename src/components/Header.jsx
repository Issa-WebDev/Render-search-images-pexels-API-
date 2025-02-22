import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { DataContext } from "../FetchAPI";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { query, setQuery, fetchImages } = useContext(DataContext);
  const { theme, ToggleTheme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchImages(query);
    }

    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <header className="absolute z-10 top-0 left-0 right-0 flex flex-col py-5 px-4 md:px-10">
      <nav className="flex justify-between items-center">
        <h1 className="logo text-3xl italic text-white font-bold">
          Getpic
        </h1>
        <button className="flex items-center justify-center px-2 md:px-3 py-2 md:py-3 bg-white rounded-full font-semibold hover:opacity-90 transition-all duration-500 border-white cursor-pointer">
          <span onClick={ToggleTheme}>
            {theme ? (
              <MdOutlineLightMode size={18} />
            ) : (
              <MdOutlineDarkMode size={18} />
            )}
          </span>
        </button>
      </nav>

      <div className="flex flex-col items-center justify-center md:pt-30">
        <h1 className="text-[2rem] lg:text-4xl font-semibold pt-16 md:pt-0 md:font-semibold text-white w-[100%] lg:w-[48%] pb-6 md:pb-8">
          Royalty-free and free photos, shared by talented creators.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="relative w-[100%] lg:w-[48%] flex justify-center items-center gap-2"
        >
          <button
            type="submit"
            className="cursor-pointer text-gray-400 dark:text-white absolute top-[30%] pl-1 left-1 sm:left-3 pr-2 border-r-2 border-gray-200"
          >
            <IoSearch size={20} />
          </button>
          <input
            type="text"
            placeholder="Search for free photos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 pl-12 md:pl-14 px-4 md:py-4 py-3 rounded-xl border-0 focus:outline-3 outline-blue-200 font-semibold bg-white dark:bg-[#222] dark:text-white text-gray-500"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
