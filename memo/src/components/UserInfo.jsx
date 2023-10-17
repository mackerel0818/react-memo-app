import React, { useState, useEffect } from "react";
import {
  deleteUser,
  getUserInfo,
  signout,
  updateUserInfo,
} from "../service/AppService";
import { useQuery } from "@tanstack/react-query";
import { BsPersonCircle } from "react-icons/bs";
import { PiMoonThin, PiSunThin } from "react-icons/pi";
import { useTheme } from "../context/ThemeContext";

export default function UserInfo({ setShowModal }) {
  const userId = localStorage.getItem("USER_ID");
  const { darkMode, toggleDarkMode } = useTheme();
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery(["userInfo", userId], getUserInfo);

  const handleLogout = () => signout();
  const handleRemove = () => {
    deleteUser(userId).then(() => (window.location.href = "/"));
  };

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    email: "",
    username: "",
  });

  useEffect(() => {
    if (user) {
      setUpdatedUser({
        email: user.email,
        username: user.username,
      });
    }
  }, [user]);

  const handleUpdate = async () => {
    await updateUserInfo(userId, updatedUser);
    refetch();
    setEditing(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-30 z-50 bg-black dark:bg-opacity-70 dark:bg-gray-800">
        <div className="w-full max-w-lg p-6 mx-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="flex items-center justify-between border-b dark:border-gray-600 pb-4">
            <BsPersonCircle className="text-6xl text-black dark:text-white" />
            <h3 className="flex items-center text-5xl font-bold uppercase font-['Poppins'] text-black dark:text-white ml-4">
              My profile
            </h3>
            <button
              className="text-3xl text-black dark:text-white leading-none ml-auto outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
          <div className="py-4">
            {isLoading && (
              <p className="text-black dark:text-white">Loading...</p>
            )}
            {error && <p className="text-red-500 dark:text-red-500">{error}</p>}
            {user && (
              <div className="my-4">
                <p
                  className="text-3xl mb-2 font-light font-['Poppins'] text-black dark:text-white cursor-pointer"
                  onClick={() => setEditing(true)}
                >
                  {"Name : "}
                  {editing ? (
                    <input
                      type="text"
                      className="w-3/5 text-3xl font-light font-['Poppins'] text-black dark:text-white bg-transparent border-b border-black dark:border-white focus:outline-none"
                      value={updatedUser.username}
                      onChange={(e) =>
                        setUpdatedUser({
                          ...updatedUser,
                          username: e.target.value,
                        })
                      }
                    />
                  ) : (
                    user?.username || "Loading..."
                  )}
                </p>
                <p
                  className="text-3xl font-light font-['Poppins'] text-black dark:text-white cursor-pointer"
                  onClick={() => setEditing(true)}
                >
                  {"Email : "}
                  {editing ? (
                    <input
                      type="email"
                      className="w-3/5 text-3xl font-light font-['Poppins'] text-black dark:text-white bg-transparent border-b border-black dark:border-white focus:outline-none"
                      value={updatedUser.email}
                      onChange={(e) =>
                        setUpdatedUser({
                          ...updatedUser,
                          email: e.target.value,
                        })
                      }
                    />
                  ) : (
                    user?.email || "Loading..."
                  )}
                </p>
                <div className="mt-2 flex items-center text-3xl font-light font-['Poppins'] text-black dark:text-white">
                  {"Theme : "}

                  <button
                    className="ml-2 text-black dark:text-white outline-none focus:outline-none"
                    onClick={toggleDarkMode}
                  >
                    {darkMode ? (
                      <PiSunThin className="ml-2 mt-1" />
                    ) : (
                      <PiMoonThin className="ml-2 mt-1" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between pt-4 border-t dark:border-gray-600">
            <button
              className="text-red-500 font-bold font-['Poppins'] uppercase px-6 py-2 text-sm focus:outline-none mr-4 transition duration-150"
              onClick={handleRemove}
            >
              Cancel Membership
            </button>
            <div className="flex">
              {editing && (
                <button
                  className="bg-black font-['Poppins'] dark:bg-white text-white dark:text-black font-bold uppercase px-6 py-2 text-sm focus:outline-none transition duration-150 mr-2"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              )}
              <button
                className="bg-black font-['Poppins'] dark:bg-white text-white dark:text-black font-bold uppercase px-6 py-2 text-sm focus:outline-none transition duration-150 rounded-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
