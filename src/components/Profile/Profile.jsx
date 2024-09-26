import style from "./Profile.module.css";

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;

  return (
    //* Bio
    <div className={style.profile}>
      <div className={style.wrapper}>
        <img className={style.userAvatar} src={image} alt="User avatar" />
        <p className={style.userName}>{name}</p>
        <p className={style.userTag}>@{tag}</p>
        <p className={style.userLocation}>{location}</p>
      </div>

      {/* Stats */}
      <ul className={style.listStats}>
        <li className={style.listItem}>
          <span className={style.statsText}>Followers</span>
          <span className={style.statsNumbers}>{stats.followers}</span>
        </li>
        <li className={style.listItem}>
          <span className={style.statsText}>Views</span>
          <span className={style.statsNumbers}>{stats.views}</span>
        </li>
        <li className={style.listItem}>
          <span className={style.statsText}>Likes</span>
          <span className={style.statsNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
