import style from "./FriendsListItem.module.css";
import clsx from "clsx";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;

  return (
    <div className={style.wrapper}>
      <img className={style.image} src={avatar} alt="Avatar" width="48" />
      <p className={style.name}>{name}</p>
      <p
        className={clsx(style.status, {
          [style.online]: isOnline,
          [style.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
