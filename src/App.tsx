import Button from "./Components/Button/Button.tsx";
import Student from "./Components/Student.tsx";
import UserGreeting from "./Components/UserGreeting.tsx";
import List from "./Components/List.tsx";
import type { Fruit } from "./Components/List.tsx";
import ProfilePicture from "./Components/ProfilePicture.tsx";
import MyComponent from "./Components/MyComponent.tsx";
import Counter from "./Components/Counter.tsx";
import Divider from "./Components/Divider.tsx";
import OnChange from "./Components/OnChange.tsx";

function App() {
  const fruits: Fruit[] = [
    { id: 1, name: "Apple", kcal: 50 },
    { id: 2, name: "Orange", kcal: 60 },
    { id: 3, name: "Bannana", kcal: 130 },
    { id: 4, name: "Pineapple", kcal: 140 },
  ];
  const vegetables: Fruit[] = [
    { id: 5, name: "potatoes", kcal: 100 },
    { id: 6, name: "celery", kcal: 15 },
    { id: 7, name: "carrots", kcal: 232 },
    { id: 8, name: "corn", kcal: 2311 },
  ];
  return (
    <>
      <Student name="Sponge Bob" age={30} isStudent={true} />
      <Student name="Patrick" age={24} isStudent={false} />
      <Student name="Barcio Senior" age={48} isStudent={false} />
      <Student />
      <Divider />
      <UserGreeting isLoggedIn={true} username="HighImExy" />
      <Divider />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
      <Divider />
      <ProfilePicture />
      <Divider />
      <Button />
      <Divider />
      <MyComponent></MyComponent>
      <Divider />
      <Counter></Counter>
      <Divider />
      <OnChange />
      <Divider />
    </>
  );
}

export default App;
