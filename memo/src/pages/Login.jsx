import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/ui/Logo";
import BackgroundImage from "../components/ui/BackgroundImage";
import { signin } from "../service/AppService";

export default function Login() {
  const handleSubmit = (e) => {
    console.log(e.preventDefault);
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");

    signin({ email: email, password: password });
  };

  return (
    <>
      <Logo />
      <main className="flex flex-col items-center justify-center mt-14">
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
        <form className="w-72" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              placeholder="email"
              required
              type="email"
              id="email"
              name="email"
              className="w-full h-12 px-4 py-2.5 rounded border border-black"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="hidden">
              Password
            </label>
            <input
              placeholder="password"
              required
              type="password"
              id="password"
              name="password"
              className="w-full h-12 px-4 py-2.5 rounded border border-black"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 px-4 bg-black rounded text-white font-bold font-['Poppins'] text-lg hover:bg-neutral-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <Link
          to="/signup"
          className="mt-4 text-zinc-600 text-lg font-medium font-['Poppins']"
        >
          Don’t have an account?
        </Link>
        <BackgroundImage />
      </main>
    </>
  );
}
