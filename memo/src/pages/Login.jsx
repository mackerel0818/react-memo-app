import React from "react";
import { Link } from "react-router-dom";
import { PiNotebook } from "react-icons/pi";

export default function Login() {
  const backgroundStyle = {
    backgroundImage:
      "url(https://res.cloudinary.com/dnbf7czsn/image/upload/v1697093937/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_cdp7lp.png)",
    backgroundSize: "90%",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <nav className="flex items-center m-2">
        <PiNotebook className="text-4xl mr-2 pt-1" />
        <h1 className="text-4xl font-extralight font-['Poppins']">Bethink</h1>
      </nav>
      <main className="flex flex-col items-center justify-center mt-16">
        <section className="text-center">
          <h1 className="text-black text-4xl font-semibold uppercase font-['Poppins'] mb-5">
            Login
          </h1>
          <p className="text-black text-md font-medium font-['Poppins'] mb-5 mx-4">
            Hello, new friend! I’m Bethink - a convenient tool for you <br />
            to easily jot down and manage your thoughts and ideas. Give me a
            try!
          </p>
        </section>
        <form className="w-72">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-neutral-500 text-lg font-medium font-['Poppins']"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-12 px-4 py-2.5 rounded border border-black"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-neutral-500 text-lg font-medium font-['Poppins']"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full h-12 px-4 py-2.5 rounded border border-black"
            />
          </div>
          <button className="w-full h-12 px-4 bg-black rounded text-white font-bold font-['Poppins'] text-lg">
            Login
          </button>
        </form>
        <Link
          to="/signup"
          className="mt-5 text-zinc-600 text-lg font-medium font-['Poppins']"
        >
          Don’t have an account?
        </Link>
        <div
          style={backgroundStyle}
          className="absolute bottom-0 left-0 right-0 mx-auto max-w-lg md:max-w-2xl lg:max-w-3xl h-[250px]"
        />
      </main>
    </>
  );
}
