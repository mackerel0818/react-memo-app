import React from "react";
import BackgroundImage from "../components/ui/BackgroundImage";
import Logo from "../components/ui/Logo";
import { Link } from "react-router-dom";
import { signup } from "../service/AppService";

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    signup({ email: email, username: username, password: password }).then(
      (response) => {
        window.location.href = "/login";
      }
    );
  };

  return (
    <>
      <Logo />
      <main className="flex flex-col items-center justify-center mt-14">
        <section className="text-center">
          <h1 className="text-black text-4xl font-semibold uppercase font-['Poppins'] mb-5">
            Sign up
          </h1>
          <p className="text-black text-md font-medium font-['Poppins'] mb-5 mx-4">
            Hello, new friend! I’m Bethink - a convenient tool for you <br />
            to easily jot down and manage your thoughts and ideas. Give me a
            try!
          </p>
        </section>
        <form className="w-72" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="username" className="hidden">
              Username
            </label>
            <input
              placeholder="username"
              required
              type="username"
              id="username"
              name="username"
              className="w-full h-12 px-4 py-2.5 rounded border border-black"
            />
          </div>
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
            Sign up
          </button>
        </form>
        <Link
          to="/login"
          className="mt-4 text-zinc-600 text-lg font-medium font-['Poppins']"
        >
          Already have any account?
        </Link>
        <BackgroundImage />
      </main>
    </>
  );
}
