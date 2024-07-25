import "./Avatar.css";

const Avatar = ({ name }) => {
  return (
    <img
      src={`https://robohash.org/${name}`}
      alt={`${name}'s profile. Robots lovingly delivered by Robohash.org.`}
      className="avatar-profile-image"
    />
  );
};

export default Avatar;
