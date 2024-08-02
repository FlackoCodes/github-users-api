/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { FaBlog, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    bio,
    html_url,
    public_repos,
    url,
    name,
    login,
    created_at,
    location,
    blog,
    twitter_username,
  } = user;

  const createdAt = new Date(created_at);
  const day = createdAt.getDate();
  const month = createdAt.toLocaleString("en-us", { month: "short" });
  const year = createdAt.getFullYear();

  return (
    <div className="bg-slate-700 rounded-sm user p-6">
      <div>
        <img src={avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
      </div>
      <div>
        <div className="flex justify-between gap-10 items-center">
          <p className="text-white font-semibold">{name ? name : login}</p>
          <p className="text-gray-500">
            Joined on {day} {month} {year}
          </p>
        </div>
        <div className="block text-start">
          <a href={html_url} className="text-blue-500">
            {login}
          </a>
        </div>
        <p className="text-start text-xs font-semibold w-48 mx-0 my-auto text-gray-300">
          {bio}
        </p>
        <div className="bg-black flex justify-between items-center p-4 my-4 rounded-md">
          <div className="flex flex-col text-start">
            <h3 className="text-gray-500 font-bold">Repos</h3>
            <p className="text-2xl text-white">{public_repos}</p>
          </div>
          <div>
            <h3 className="text-gray-500 font-bold">Followers</h3>
            <p className="text-2xl text-white">{followers}</p>
          </div>
          <div>
            <h3 className="text-gray-500 font-bold">Following</h3>
            <p className="text-2xl text-white">{following}</p>
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center">
          <div className="flex gap-1 items-center">
            <FaLocationDot className="text-white" />
            <p className="text-gray-300 text-s font-bold">{location}</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaTwitter className="text-white" />
            <p className="text-gray-300 text-s font-bold">
              {twitter_username ? twitter_username : "Not Available"}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <FaBlog className="text-white" />
            <p className="text-gray-300 text-s font-bold">
              {blog ? blog : "No blog"}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <FaGithub className="text-white" />
            <p className="text-gray-300 text-s font-bold">@github </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-between items-center">
<div className="flex items-center gap-3">
  <FaLocationDot className="text-white" />
  <p className="text-gray-300 text-xl font-bold">{location}</p>
</div>

<div>
  <div className="flex items-center gap-3">
    <FaTwitter className="text-white" />
    <p className="text-gray-300 text-xl font-bold">
      {twitter_username}
    </p>
  </div>
</div>
</div> */
}

// <div>
// <div className="name-container">
//   <div>
//     <div>
//       <p>{name}</p>
//     </div>
//   </div>
//   <div className="">
//     <div className="text-start">
//       <a href={html_url}>{login}</a>
//       <p className="text-xs">{bio ? bio : "This profile has no bio"}</p>
//     </div>
//   </div>
// </div>
// <div className="profile-container">
//   <div>
//     <p>Public Repos</p>
//     <p>{public_repos}</p>
//   </div>
//   <div>
//     <p>Followers</p>
//     <p>{followers}</p>
//   </div>
//   <div>
//     <p>Following</p>
//     <p>{following}</p>
//   </div>
// </div>
// </div>
