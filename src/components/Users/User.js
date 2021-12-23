import "./user.css";

export const User = ({ avatar, name, userName }) => {
    return (
      <div className="user">
        <div className="img-block">
          <img className="image" src={avatar} alt="" />
        </div>
        <span>{name}</span>
        <span>{userName}</span>
      </div>
    );
};