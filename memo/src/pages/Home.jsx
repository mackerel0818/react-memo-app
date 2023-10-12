import React from "react";
import BackgroundImage from "../components/ui/BackgroundImage";
import Logo from "../components/ui/Logo";
import { Link } from "react-router-dom"; // react-router-dom의 Link 컴포넌트 추가

export default function Home() {
  return (
    <>
      <Logo />
      <main className="flex flex-col items-center justify-center mx-24 h-[500px]">
        <section className="text-center">
          <h1 className="text-7xl font-bold text-gray-800 font-['Poppins'] mb-5">
            Discover, Create, Bethink.
          </h1>
          <p className="text-2xl text-gray-600 font-Poppins md:w-[670px] mx-auto">
            Capture your ideas and inspirations effortlessly with Bethink. Stay
            organized, productive, and creative.
          </p>
          <Link to="/login">
            <button
              type="submit"
              className="w-40 h-12 px-4 bg-black rounded text-white font-bold font-['Poppins'] text-lg mt-5 hover:bg-neutral-700 transition duration-300"
            >
              Get Started →
            </button>
          </Link>
        </section>

        <BackgroundImage />
      </main>
    </>
  );
}
