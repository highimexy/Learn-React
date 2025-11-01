import Button from "./Components/Button/Button.tsx";
import Student from "./Components/Student.tsx";
import UserGreeting from "./Components/UserGreeting.tsx";
import List from "./Components/List.tsx";

import type { Fruit } from "./Components/List.tsx";

function App() {
  const fruits: Fruit[] = [
    { id: 1, name: "Apple", kcal: 50 },
    { id: 2, name: "Orange", kcal: 60 },
    { id: 3, name: "Bannana", kcal: 130 },
    { id: 4, name: "Pineapple", kcal: 140 },
  ];
  return (
    <>
      <Student name="Sponge Bob" age={30} isStudent={true} />
      <Student name="Patrick" age={24} isStudent={false} />
      <Student name="Barcio Senior" age={48} isStudent={false} />
      <Student />
      <UserGreeting isLoggedIn={true} username="HighImExy" />
      <List items={fruits} category="Fruits" />
      <Button></Button>
    </>
  );
}

export default App;
