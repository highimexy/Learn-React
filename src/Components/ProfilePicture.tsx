function ProfilePicture() {
  const imageURL = "../src/assets/me.png";

  const handleClick = (e) => (e.target.style.display = "none");
  return (
    <>
      <div>
        <img
          className="profile-picture"
          onClick={(e) => handleClick(e)}
          src={imageURL}
        ></img>
      </div>
    </>
  );
}

export default ProfilePicture;
