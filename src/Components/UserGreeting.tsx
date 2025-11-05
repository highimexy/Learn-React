type UserProps = {
  isLoggedIn: boolean;
  username: string;
};

function UserGreeting({ isLoggedIn = false, username = "default" }: UserProps) {
  /*  if (isLoggedIn) {
    return <h2>Welcome: {username}</h2>;
  } else {
    return <h2>Please log in to contiune</h2>
  }
*/

  //To samo co na górze

  /* return isLoggedIn ? (
    <h2 className="welcome-message">Welcome:{username}</h2>
  ) : (
    <h2 className="sign-in">Please sign in</h2>
  );
  */

  //To samo co na górze tylko czytelniejsze

  const welcomeMessage = (
    <div className="welcome-message-container">
      <h2 className="welcome-message">Welcome:{username}</h2>
    </div>
  );

  const loginPrompt = <h2 className="sign-in">Please sign in</h2>;

  return isLoggedIn ? welcomeMessage : loginPrompt;
}

export default UserGreeting;
