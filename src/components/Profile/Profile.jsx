import s from './Profile.module.css'

export const Profile = ({name, tag, location, image, stats}) => {
  // console.log(stats);
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <img className={s.image}
          src={image}
          alt={tag}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.span}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.span}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.span}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// export default Profile;
