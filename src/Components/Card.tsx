import profilePicture from "./assets/me.png";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={profilePicture}
        alt="Profile picture"
      ></img>
      <h2 className="card-title">HighImExy</h2>
      <p className="card-description">I work as a QA and play video games</p>
    </div>
  );
}

export default Card;
