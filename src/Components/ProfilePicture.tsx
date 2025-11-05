function ProfilePicture() {
  const imageURL = "../src/assets/me.png";

  const handleClick = (e: any) => (e.target.style.display = "none");
  return (
    <>
      <div className="profile-picture-container">
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
