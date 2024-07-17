import "./Avatar.css";

const Avatar = ({ name }) => {
  return (
    <img
      src={`https://api.adorable.io/avatars/10/${name}`}
      alt={`${name} profile`}
      className="avatar-profile-image"
    />
  );
};

export default Avatar;
