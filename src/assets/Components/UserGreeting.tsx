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

  return isLoggedIn ? <h2>Welcome: {username}</h2> : <h2>Please sign in</h2>;
}

export default UserGreeting;
