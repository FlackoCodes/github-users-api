import { useState, useEffect } from "react";
import User from "./User";

export default function GithubUsers() {
  const [userName, setUsername] = useState("FlackoCodes");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUser() {
    try {
      setLoading(true);
      const url = `https://api.github.com/users/${userName}`;
      const res = await fetch(url);
      const results = await res.json();
      if (results) {
        setUserData(results);
        setUsername("")
        setLoading(false);
      }
      console.log(results);
      console.log(`'this is' ${userData}`);


    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function onChange(e) {
    setUsername(e.target.value);
  }

  function handleSearch() {
    fetchGithubUser()
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  if (loading) return <div>loading plaease wait</div>;

  return (
    <div className="github-profile">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="search github username"
          value={userName}
          onChange={onChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData}/> : null
      }
    </div>
  );
}
