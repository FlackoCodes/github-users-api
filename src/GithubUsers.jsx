import { useState, useEffect } from "react";
import User from "./User";
import { MdLightMode } from "react-icons/md";

export default function GithubUsers() {
  const [userName, setUsername] = useState("FlackoCodes");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("toggle theme");
  };

  async function fetchGithubUser() {
    try {
      setLoading(true);
      const url = `https://api.github.com/users/${userName}`;
      const res = await fetch(url);
      const results = await res.json();
      if (results) {
        setUserData(results);
        setUsername("");
        setLoading(false);
      }
      console.log(results);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function onChange(e) {
    setUsername(e.target.value);
  }

  function handleSearch() {
    fetchGithubUser();
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  if (loading)
    return (
      <div className="text-white text-3xl font-bold p-4 m-4 text-center">
        loading please wait
      </div>
    );

  return (
    <div className="github-profile grid place-content-center h-svh">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-white font-bold font-mono">devFinder</h2>
        </div>
        <div
          onClick={handleSwitch}
          className="flex gap-2 items-center cursor-pointer"
        >
          <h2 className="uppercase text-white font-bold">light</h2>
          <MdLightMode className="text-white" />
        </div>
      </div>
      <div className="input-wrapper flex gap-5 justify-between">
        <div className="relative w-full">
          <input
            type="text"
            name="search-by-username"
            placeholder="Search Github Username..."
            value={userName}
            onChange={onChange}
            className="w-full pr-16 bg-slate-700 outline-none border-none my-4 text-white"
          />
          <button
            onClick={handleSearch}
            className="p-2 absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-400"
          >
            Search
          </button>
        </div>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
