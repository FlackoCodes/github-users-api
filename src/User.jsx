/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
  } = user;

  const createdAt = new Date(created_at);
  const day = createdAt.getDate();
  const month = createdAt.toLocaleString("en-us", { month: "short" });
  const year = createdAt.getFullYear();
  console.log(createdAt);

  console.log(url, bio);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="user" className="avatar" />
      </div>
      <div className="name-container">
        <a href={html_url}>{name || login}</a>
        <p>
          user joined on {day} {month} {year}
        </p>
      </div>
      <div className="profile-container">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
