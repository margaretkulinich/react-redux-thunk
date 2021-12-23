import "./styles.css";

export const Tweet = ({ content, image, avatar, name, userName }) => {
    return (
      <div className="post">
        <div className="post__header">
            <img className="avatar" src={avatar} alt="" />
            <h3 className="name">{name}</h3>
            <span className="user-name">{userName}</span>
        </div>
        <img className="post-image" src={image} alt=""/>
        <div className="post__content">{content}</div>
      </div>
    );
};
